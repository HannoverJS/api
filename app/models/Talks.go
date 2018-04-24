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
	Title       string   `json:"title,omitempty"`
	Description string   `json:"description,omitempty"`
	Date        string   `json:"date,omitempty"`
	UpdatedAt   string   `json:"updated_at,omitempty"`
	Speaker     *Speaker `json:"speaker,omitempty"`
}

type Speaker struct {
	Name       string `json:"name,omitempty"`
	AvatarURL  string `json:"avatar_url,omitempty"`
	Occupation string `json:"occupation,omitempty"`
	Twitter    string `json:"twitter,omitempty"`
	TwitterURL string `json:"twitter_url,omitempty"`
}

type GithubTalk struct {
	URL       string      `json:"url,omitempty"`
	Title     string      `json:"title,omitempty"`
	CreatedAt string      `json:"created_at,omitempty"`
	UpdatedAt string      `json:"updated_at,omitempty"`
	Body      string      `json:"body,omitempty"`
	User      *GithubUser `json:"user,omitempty"`
}

type GithubUser struct {
	AvatarURL string `json:"avatar_url,omitempty"`
	URL       string `json:"html_url,omitempty"`
}

func (u *Talk) FetchAll() []*Talk {

	var ghTalks []*GithubTalk
	err := getJson(os.Getenv("GITHUP_TALK_API"), &ghTalks)
	if err != nil {
		logrus.Info("Error fetching talks", err)
	}

	re, _ := regexp.Compile(`^#{5} (.+)(?:\s+#{6} (.+))?(?:\s+#{6} \[(.+)]\((.+)\))?\s+([\s\S]+)\s*$`)

	talks := make([]*Talk, 0)
	for _, ghTalk := range ghTalks {
		if len(talks) <= 1 {
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
