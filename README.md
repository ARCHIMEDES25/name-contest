# name-contest
Graphql course prime


## Sample Queries

```
{
  me(key: "4242") {
    id
    email
    fullName
    contestsCount
    namesCount
    votesCount
    contests{
      id
      names {
        description
        label
        totalVotes{
          up
          down
        }
      }
    }
    activities {
      ...on Name {
        label
      }
      ...on Contest {
        title
      }
    }
  }
}
```

### Mutations
```
mutation AddContest($contestInput: ContestInput!){
  AddContest(input: $contestInput) {
    id
    code
    title
    description
    status
  }  
}

mutation AddName($nameInput: NameInput!){
  AddName(input: $nameInput){
    id
    description
    label
    totalVotes {
      up
      down
    }
  }
}

Query Variables:

{
  "contestInput": {
    "apiKey": "0000",
    "title": "Graphql",
    "description": "Graphql rocks!!! Graphql rocks!!!Graphql rocks!!!"
  },
  "nameInput": {
    "apiKey": "0000",
    "contestId": "2",
    "label": "a name",
    "description": "indeed!!!!"
  }
}
```

