import { Request, Response } from "express";

const jobs: string[] = ["Dev", "QA", "PO"];

function listAllJobs(req: Request, res: Response) {
  res.send({ message: "All jobs" });
}

export { listAllJobs };