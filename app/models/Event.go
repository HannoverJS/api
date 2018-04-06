package models

import (
	"os"
	"time"

	"github.com/sirupsen/logrus"

	"github.com/eladmica/go-meetup/meetup"
)

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

	client := meetup.NewClient(nil)
	client.Authentication = meetup.NewKeyAuth(os.Getenv("MEETUP_API_KEY"))

	meetups, err := client.GetEvents("Hannover-Gophers", nil)
	if err != nil {
		logrus.Info("Could not fetch Meetups")
		logrus.Errorf("Could not fetch Meetups\n%v", err)
	}

	// https://stackoverflow.com/questions/24987131/how-to-parse-unix-timestamp-in-golang
	// Double check Date time format!
	for id, event := range meetups {
		events = append(events, Event{
			id,
			time.Unix(int64(event.Time/1000), 0).Format(time.RFC3339),
			time.Unix(int64(event.Updated/1000), 0).Format(time.RFC3339),
			"https://www.meetup.com/de-DE/Hannover-Gophers/events/" + event.ID,
			&Venue{"Hannover Gophers",
				event.Venue.Lat,
				event.Venue.Lon,
				event.Venue.City,
				event.Venue.Country,
				event.Venue.LocalizedCountryName,
				"2. OG"}})
	}

	return events
}
