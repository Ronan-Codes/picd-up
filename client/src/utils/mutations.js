import gql from 'graphql-tag';

export const ADD_PHOTO = gql`
mutation addPhoto($photo: Upload!, $userId: String){
    addPhoto(photo: $photo, userId: $userId)
}
`
export const ADD_PROFILE_PHOTO = gql`
mutation addProfilePhoto($photo: Upload!, $userId: String){
    addProfilePhoto(photo: $photo, userId: $userId)
}
`
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username:$username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($description: String) {
    updateUser(description: $description) {
      description
    }
  }
`;

export const ADD_FOLLOWING = gql`
    mutation addFollowing($id: ID!) {
        addFollowing(followingId: $id) {
            _id
            username
            followingCount
            following {
                _id
                username
            }
        }
    }
`;

export const UNFOLLOW = gql`
    mutation unfollow($id: ID!) {
        unfollow(followingId: $id) {
            _id
            username
            followingCount
            following {
                _id
                username
            }
        }
    }
`;

export const ADD_FOLLOWER = gql`
    mutation addFollower($id: ID!) {
        addFollower(followerId: $id) {
            _id
            username
            followersCount
            followers {
                _id
                username
            }
        }
    }
`;

export const REMOVE_FOLLOWER = gql`
    mutation removeFollower($id: ID!) {
        removeFollower(followerId: $id) {
            _id
            username
            followersCount
            followers {
                _id
                username
            }
        }
    }
`;

export const ADD_GENRE = gql`
  mutation addGenre($genreId: ID!) {
    addGenre(genreId: $genreId) {
      genres {
        _id
        name
      }
    }
  }
`;

export const REMOVE_GENRE = gql`
  mutation addGenre($genreId: ID!) {
    removeGenre(genreId: $genreId) {
      genres {
        _id
        name
      }
    }
  }
`;