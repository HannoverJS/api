package ctrl

import (
	"net/http"

	"github.com/HannoverGophers/hannovergophers-api/app/lib"
	"github.com/HannoverGophers/hannovergophers-api/app/models"
)

// GetAllOrganizersHandler ...
func GetAllOrganizersHandler(w http.ResponseWriter, req *http.Request) {
	res := lib.Response{ResponseWriter: w}
	organizer := new(models.Organizer)
	organizers := organizer.FetchAll()

	res.SendOK(organizers)
}
