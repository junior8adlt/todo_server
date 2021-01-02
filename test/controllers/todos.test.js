const { todos } = require("../../models");
const request = require("supertest");
const app = require("../../index");
//Unit test get all todos
describe("get", () => {
  const todosValues = [
    {
      id: 1,
      description: "Debo llegar a las 10 al coffe hour",
      title: "Desayunar con amigos",
      completed: true,
      createdAt: "2020-12-31T18:26:53.085Z",
      updatedAt: "2020-12-31T18:33:04.855Z",
    },
  ];

  it("Success", async () => {
    todos.findAll = jest.fn().mockResolvedValueOnce(todosValues);
    const res = await request(app).get(`/v1/todos/`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ todosResults: todosValues });
  });
  it("Exception", async () => {
    todos.findAll = jest.fn().mockRejectedValueOnce(new Error("Foo"));
    const res = await request(app).get(`/v1/todos/`);
    expect(res.statusCode).toEqual(500);
  });
});
//Unit test get  todo by id

describe("getById", () => {
  const todo = {
    id: 1,
    description: "Debo llegar a las 10 al coffe hour",
    title: "Desayunar con amigos",
    completed: true,
    createdAt: "2020-12-31T18:26:53.085Z",
    updatedAt: "2020-12-31T18:33:04.855Z",
  };
  const id = 1;
  it("Success", async () => {
    todos.findOne = jest.fn().mockResolvedValueOnce(todo);
    const res = await request(app).get(`/v1/todos/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ todo });
  });
  it("Exception", async () => {
    todos.findOne = jest.fn().mockRejectedValueOnce(new Error("Foo"));
    const res = await request(app).get(`/v1/todos/${id}`);
    expect(res.statusCode).toEqual(500);
  });
});

//Unit test create todo

describe("create", () => {
  const todo = {
    id: 2,
    description: "Debo llegar a las 10 al coffe hour",
    title: "Desayunar con amigos",
    completed: false,
    createdAt: "2020-12-31T18:26:53.085Z",
    updatedAt: "2020-12-31T18:33:04.855Z",
  };
  it("Success", async () => {
    todos.create = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve(todo));
    const res = await request(app).post(`/v1/todos/`).send({
      title: "Lavar ropa",
      description: "Debo lavar la ropa",
    });
    expect(res.statusCode).toEqual(200);
  });
  it("Exception", async () => {
    todos.create = jest.fn().mockRejectedValueOnce(new Error("Foo"));
    const res = await request(app).post(`/v1/todos/`).send({
      title: "Lavar ropa",
      description: "Debo lavar la ropa",
    });
    expect(res.statusCode).toEqual(500);
  });
});

//Unit test update todo

describe("update", () => {
  const todo = {
    id: 2,
    description: "Debo llegar a las 10 al coffe hour",
    title: "Desayunar con amigos",
    completed: true,
    createdAt: "2020-12-31T18:26:53.085Z",
    updatedAt: "2020-12-31T18:33:04.855Z",
    save: jest.fn(),
  };
  const id = 2;
  it("Success", async () => {
    todos.findOne = jest.fn().mockResolvedValueOnce(todo);
    const res = await request(app).put(`/v1/todos/${id}`).send({
      title: "Lavar ropa",
      description: "Debo lavar la ropa",
    });
    expect(res.statusCode).toEqual(204);
  });
  it("Todo Not Found", async () => {
    todos.findOne = jest.fn().mockResolvedValueOnce(null);
    const res = await request(app).put(`/v1/todos/${id}`).send({
      title: "Lavar ropa",
      description: "Debo lavar la ropa",
    });
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: "todo not found" });
  });

  it("Update Completed Param", async () => {
    todos.findOne = jest.fn().mockResolvedValueOnce(todo);
    const res = await request(app).put(`/v1/todos/${id}`).send({
      title: "Lavar ropa",
      description: "Debo lavar la ropa",
      completed: true,
    });
    expect(res.statusCode).toEqual(204);
  });

  it("Exception", async () => {
    todos.findOne = jest.fn().mockRejectedValueOnce(new Error("Foo"));
    const res = await request(app).put(`/v1/todos/${id}`).send({
      title: "Lavar ropa",
      description: "Debo lavar la ropa",
    });
    expect(res.statusCode).toEqual(500);
  });
});
//Unit test for update only completed param
describe("updateCompleted", () => {
  const todo = {
    id: 2,
    completed: true,
    save: jest.fn(),
  };
  const id = 2;
  it("Success", async () => {
    todos.findOne = jest.fn().mockResolvedValueOnce(todo);
    const res = await request(app).patch(`/v1/todos/${id}`).send({
      completed: true,
    });
    expect(res.statusCode).toEqual(204);
  });
  it("Completed Must Be Boolean", async () => {
    const res = await request(app).patch(`/v1/todos/${id}`).send({
      completed: "true",
    });
    expect(res.statusCode).toEqual(422);
    expect(res.body).toEqual({
      error: "completed cannot be null & must be boolean",
    });
  });
  it("Todo Not Found", async () => {
    todos.findOne = jest.fn().mockResolvedValueOnce(null);
    const res = await request(app).patch(`/v1/todos/${id}`).send({
      completed: true,
    });
    expect(res.statusCode).toEqual(404);
    expect(res.body).toEqual({ error: "todo not found" });
  });
  it("Exception", async () => {
    todos.findOne = jest.fn().mockRejectedValueOnce(new Error("Foo"));
    const res = await request(app).patch(`/v1/todos/${id}`).send({
      completed: true,
    });
    expect(res.statusCode).toEqual(500);
  });
});

//Unit test delete todo
describe("delete", () => {
  const id = 1;

  it("Success", async () => {
    todos.destroy = jest.fn().mockResolvedValueOnce(true);
    const res = await request(app).delete(`/v1/todos/${id}`);
    expect(res.statusCode).toEqual(204);
  });
  it("Exception", async () => {
    todos.destroy = jest.fn().mockRejectedValueOnce(new Error("Foo"));
    const res = await request(app).delete(`/v1/todos/${id}`);
    expect(res.statusCode).toEqual(500);
  });
});
