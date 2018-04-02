package ctrl

import (
	"net/http"

	"github.com/HannoverGophers/hannovergophers-api/app/lib"
	"github.com/HannoverGophers/hannovergophers-api/app/models"
)

// GetAllEventsHandler ...
func GetAllEventsHandler(w http.ResponseWriter, req *http.Request) {
	res := lib.Response{ResponseWriter: w}
	event := new(models.Event)
	events := event.FetchAll()

	res.SendOK(events)
}
