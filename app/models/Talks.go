package models

// Talk ...
type Talk struct {
	ID int `json:"id"`

	Date        string   `json:"date"`
	UpdatedAt   string   `json:"updated_at"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Speaker     *Speaker `json:"speaker"`
}

// Speaker ...
type Speaker struct {
	Name       string `json:"name"`
	AvatarURL  string `json:"avatar_url"`
	Occupation string `json:"occupation"`
	SocialName string `json:"social_name"`
	SocialURL  string `json:"social_url"`
}

// FetchAll ...
func (u *Talk) FetchAll() []Talk {
	var talks []Talk

	talks = append(talks, Talk{
		1, "2017-09-06T10:43:39.000Z", "2017-09-06T10:43:39.000Z", "Introduction Kubernetes", "A very brief introduction...",
		&Speaker{"Michael Pöllath", "https://avatars3.githubusercontent.com/u/24293821?s=400&v=4", "Software Engineer", "michaelpoellath", "https://github.com/michaelpoellath"},
	})

	talks = append(talks, Talk{
		2, "2017-09-06T10:43:39.000Z", "2017-09-06T10:43:39.000Z", "Channels & Goroutines", "A very brief introduction...",
		&Speaker{"Tobias Pauling", "https://avatars3.githubusercontent.com/u/13135987?s=400&v=4", "Software Engineer", "tpauling", "https://github.com/tpauling"},
	})

	return talks
}
