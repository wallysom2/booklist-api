import { Request, Response } from "express";

const nome: string = 'dd';
const idade: number = 10;
const isTrue: boolean = false;

function convertSalary (salary: number): number { 
  return salary * 0.8;
}

function convertCLTToPJ(req: Request, res: Response) {
  const { salary } = req.body;
  const result = salary * 0.8;
  res.send({ result });
}

export { convertCLTToPJ };