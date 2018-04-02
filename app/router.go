package app

import (
	"github.com/HannoverGophers/hannovergophers-api/app/ctrl"
	"github.com/gorilla/mux"
)

// NewRouter ...
func NewRouter() *mux.Router {

	//Create main router
	mainRouter := mux.NewRouter().StrictSlash(true)
	mainRouter.KeepContext = true

	/**
	 * meta-data
	 */
	mainRouter.Methods("GET").Path("/").HandlerFunc(ctrl.GetHelloHandler)
	mainRouter.Methods("GET").Path("/api/info").HandlerFunc(ctrl.GetAPIInfo)
	mainRouter.Methods("GET").Path("/organizers").HandlerFunc(ctrl.GetAllOrganizersHandler)
	mainRouter.Methods("GET").Path("/events").HandlerFunc(ctrl.GetAllEventsHandler)
	mainRouter.Methods("GET").Path("/talks").HandlerFunc(ctrl.GetAllTalksHandler)

	return mainRouter
}
