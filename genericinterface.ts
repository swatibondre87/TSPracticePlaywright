interface ApiResponse<T> {
  status: number;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: {
    name: 'Sidharth',
    age: 34
  }
};