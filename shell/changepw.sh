#!/bin/bash

# sh shell/sign-out.sh

curl "http://tic-tac-toe.wdibos.com/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "passwords": {
    "old": "'"${OLD}"'",
    "new": "'"${NEW}"'"
  }
}'

echo
