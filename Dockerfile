FROM golang:alpine
COPY ./api /go/
COPY ./.env /go/
RUN /bin/ash -l -c "ls -lah /go"
CMD /go/api
EXPOSE 8000
