package models

// Event ...
type Event struct {
	ID int `json:"id"`

	Date      string `json:"date"`
	UpdatedAt string `json:"updated_at"`
	MeetupURL string `json:"meetup_url"`
	Venue     *Venue `json:"venue"`
}

// Venue ...
type Venue struct {
	Name                 string  `json:"name"`
	Lat                  float64 `json:"lat"`
	Lon                  float64 `json:"lon"`
	City                 string  `json:"city"`
	Country              string  `json:"country"`
	LocalizedCountryName string  `json:"localized_country_name"`
	HowToFindUs          string  `json:"how_to_find_us"`
}

// FetchAll ...
func (u *Event) FetchAll() []Event {
	var events []Event

	events = append(events, Event{
		1, "2018-04-26T16:30:00.000Z", "2017-09-06T10:43:39.000Z", "https://www.meetup.com/de-DE/Hannover-Gophers/", &Venue{"Hannover Gophers", 52.3844108581543, 9.753049850463867, "Hannover", "de", "Germany", "Ring the bell \"HannoverJS\", you can find us on the 2nd floor."},
	})

	return events
}
