package models

import (
	"encoding/json"
	"net/http"
	"os"
	"regexp"
	"time"

	"github.com/sirupsen/logrus"
)

// Talk ...
type Talk struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Date        string   `json:"date"`
	UpdatedAt   string   `json:"updated_at"`
	Speaker     *Speaker `json:"speaker,omitempty"`
}

type Speaker struct {
	Name       string `json:"name"`
	AvatarURL  string `json:"avatar_url"`
	Occupation string `json:"occupation"`
	Twitter    string `json:"twitter"`
	TwitterURL string `json:"twitter_url"`
}

type GithubTalk struct {
	URL       string      `json:"url"`
	Title     string      `json:"title"`
	CreatedAt string      `json:"created_at"`
	UpdatedAt string      `json:"updated_at"`
	Body      string      `json:"body"`
	User      *GithubUser `json:"user"`
}

type GithubUser struct {
	AvatarURL string `json:"avatar_url"`
	URL       string `json:"html_url"`
}

// FetchAll ...
func (u *Talk) FetchAll() []*Talk {

	var ghTalks []*GithubTalk
	err := getJson(os.Getenv("GITHUP_TALK_API"), &ghTalks)
	if err != nil {
		logrus.Info("Error fetching talks", err)
	}

	re, _ := regexp.Compile(`^#{5} (.+)(?:\s+#{6} (.+))?(?:\s+#{6} \[(.+)]\((.+)\))?\s+([\s\S]+)\s*$`)

	var talks []*Talk
	for _, ghTalk := range ghTalks {
		slice := re.FindAllStringSubmatch(ghTalk.Body, -1)[0]

		talks = append(talks, &Talk{
			Title:       ghTalk.Title,
			Description: slice[5],
			Date:        ghTalk.CreatedAt,
			UpdatedAt:   ghTalk.UpdatedAt,
			Speaker: &Speaker{
				Name:       slice[1],
				AvatarURL:  ghTalk.User.AvatarURL,
				Occupation: slice[2],
				Twitter:    slice[3],
				TwitterURL: slice[4],
			},
		})

	}

	return talks
}

func getJson(url string, target interface{}) error {

	var myClient = &http.Client{Timeout: 10 * time.Second}

	r, err := myClient.Get(url)
	if err != nil {
		return err
	}
	defer r.Body.Close()

	return json.NewDecoder(r.Body).Decode(&target)
}
