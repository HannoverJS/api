package models

// Organizer ...
type Organizer struct {
	ID int `json:"id"`

	Name        string   `json:"name"`
	Description string   `json:"description"`
	Twitter     *Twitter `json:"twitter"`
}

// Twitter ...
type Twitter struct {
	Image      string `json:"profile_image_url"`
	ImageHTTPS string `json:"profile_image_url_https"`
	Handle     string `json:"screen_name"`
}

// FetchAll ...
func (u *Organizer) FetchAll() []Organizer {
	var organizers []Organizer

	organizers = append(organizers, Organizer{
		1, "Christoph Voigt", "Scrum Masterchen", &Twitter{"https://avatars3.githubusercontent.com/u/2982698?s=400&u=ec9c8963288004980eab6b0371f8e49c9f3f2933&v=4", "https://avatars3.githubusercontent.com/u/2982698?s=400&u=ec9c8963288004980eab6b0371f8e49c9f3f2933&v=4", "vogti"},
	})

	organizers = append(organizers, Organizer{
		2, "Tobias Pauling", "Software Engineer", &Twitter{"https://avatars3.githubusercontent.com/u/13135987?s=400&v=4", "https://avatars3.githubusercontent.com/u/13135987?s=400&v=4", "tpauling"},
	})

	return organizers
}
