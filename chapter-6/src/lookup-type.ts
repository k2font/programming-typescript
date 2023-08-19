type APIResponse = {
  user: {
    userId: string;
    friendList: {
      count: number;
      friends: {
        firstName: string;
        lastName: string;
      }[];
    };
  }
}

function getAPIResponse(): Promise<APIResponse> {
  return Promise.resolve({
    user: {
      userId: '123',
      friendList: {
        count: 5,
        friends: [
          { firstName: 'John', lastName: 'Doe' },
          { firstName: 'Jane', lastName: 'Doe' },
        ],
      },
    },
  });
}

// friendListの型を決定するためにはルックアップ型が利用できる
type FriendList = APIResponse["user"]["friendList"]
function renderFriendList(friendList: FriendList) {
  console.log(friendList.count)
}

getAPIResponse().then((response) => {
  renderFriendList(response.user.friendList);
});