package ctrl

import (
	"net/http"

	"github.com/HannoverGophers/hannovergophers-api/app/lib"
	"github.com/HannoverGophers/hannovergophers-api/app/models"
)

// GetAllTalksHandler ...
func GetAllTalksHandler(w http.ResponseWriter, req *http.Request) {
	res := lib.Response{ResponseWriter: w}
	talk := new(models.Talk)
	talks := talk.FetchAll()

	res.SendOK(talks)
}
