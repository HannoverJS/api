package ctrl

import (
	"net/http"

	"github.com/HannoverGophers/hannovergophers-api/app/lib"
)

// GetAllEventsHandler ...
func GetHelloHandler(w http.ResponseWriter, req *http.Request) {
	res := lib.Response{ResponseWriter: w}

	res.SendOK("Hello 👋\n\nLooking for the API documenation? 🤔\nWell, Not here 😊")
}
