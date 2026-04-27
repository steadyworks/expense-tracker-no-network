from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

_expenses = []


class ExpenseCreate(BaseModel):
    amount: Optional[float] = None
    category: str = ""
    description: str = ""
    type: Optional[str] = None


@app.get("/api/expenses")
def get_expenses():
    # TODO: return _expenses as JSON
    return []


@app.post("/api/expenses", status_code=201)
def create_expense(body: ExpenseCreate):
    # TODO: validate and create an expense entry
    # Required fields: amount (positive float), category (str), description (str),
    # type ("income" or "expense")
    # Raise HTTPException(400) if amount is missing, <= 0, or type is invalid
    # Return the created entry dict with status 201
    raise HTTPException(status_code=501, detail="not implemented")


@app.delete("/api/expenses/{expense_id}", status_code=204)
def delete_expense(expense_id: str):
    # TODO: remove matching entry and return 204; raise HTTPException(404) if not found
    raise HTTPException(status_code=501, detail="not implemented")


@app.get("/api/summary")
def get_summary():
    # TODO: return {"balance": income_total - expense_total,
    #               "income": income_total, "expenses": expense_total}
    raise HTTPException(status_code=501, detail="not implemented")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
