export class UserService {
  getAllQuestions() {
    return fetch("http://localhost:3000/api/questions")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  getQuestionsByCategory(category) {
    return fetch("http://localhost:3000/api/questions")
      .then((res) => res.json())
      .then((data) => {
        return data.filter((question) => question.category === category);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  getSettings() {
    return fetch("http://localhost:3000/api/quiz-settings")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}
