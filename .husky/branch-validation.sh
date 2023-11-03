#!/usr/bin/env bash
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

valid_branch_regex='^main|develop|((feat|fix|docs|style|refactor|perf|test|build|ci|build|revert)\/[a-zA-Z\-]+)'

message="\n
------------- \n
There is something wrong with your branch name.\n
Branch names in this project must adhere to this contract: feat|fix|docs|style|refactor|perf|test|build|ci|build|revert / subject.\n
Your commit will be rejected.\n
You should rename your branch to a valid name and try again.\n
------------- \n
"

if [[ ! $local_branch_name =~ $valid_branch_regex ]]; then
    echo "$message"
    exit 1
fi

exit 0
