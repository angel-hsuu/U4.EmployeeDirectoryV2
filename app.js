import express from "express";
const app = express();
export default app;

import employeesRouter from "#api/employees";

app.use(express.json());
app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).send("Something went wrong.");
});
