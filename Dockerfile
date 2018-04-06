FROM golang:alpine
COPY ./ /go/src/github.com/HannoverGophers/hannovergophers-api
COPY ./.env /go
RUN /bin/ash -l -c "ls -lah /go/src/github.com/HannoverGophers/hannovergophers-api"
RUN /bin/ash -l -c "pwd"
RUN /bin/ash -l -c "ls -lah"
RUN apk add --no-cache git \
    && go get github.com/gorilla/mux \
    && go get github.com/joho/godotenv \
    && go get github.com/joho/godotenv/cmd/godotenv \
    && go get github.com/sirupsen/logrus \
    && go get github.com/urfave/negroni \
    && go get github.com/meatballhat/negroni-logrus \
    && go get github.com/phyber/negroni-gzip/gzip \
    && go get github.com/rs/cors \
    && go get github.com/unrolled/secure \
    && go get github.com/eladmica/go-meetup/meetup \
    && go install github.com/HannoverGophers/hannovergophers-api \
    && apk del git
RUN /bin/ash -l -c "ls -lah /go/bin/"
CMD /go/bin/hannovergophers-api
EXPOSE 8000
