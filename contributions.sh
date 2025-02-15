#!/bin/bash

if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: This script must be run inside a Git repository."
  exit 1
fi

echo "Collecting contribution statistics..."

contributors=$(git log --format='%aN' | sort | uniq)

echo "Contributor Statistics for the Repository:"
echo "==========================================="
printf "%-30s %-15s %-15s %-15s\n" "Contributor" "Commits" "Lines Added" "Lines Removed"
echo "-------------------------------------------------------------------------------------"


for contributor in $contributors; do
  commits=$(git log --author="$contributor" --pretty=oneline | wc -l)

  lines=$(git log --author="$contributor" --pretty=tformat: --numstat | 
          awk '{added+=$1; removed+=$2} END {printf "%d %d", added, removed}')

  lines_added=$(echo $lines | cut -d ' ' -f 1)
  lines_removed=$(echo $lines | cut -d ' ' -f 2)

  printf "%-30s %-15s %-15s %-15s\n" "$contributor" "$commits" "$lines_added" "$lines_removed"
done

echo "==========================================="
