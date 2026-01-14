from fastapi import FastAPI, Form
from fastapi.responses import FileResponse, HTMLResponse

app = FastAPI()

def sum_nums(a: int, b: int, c: int) -> int:
    return a + b + c

@app.get("/")
async def index():
    return FileResponse("index.html")

@app.post("/calc")
async def calc(
    number1: int = Form(0), 
    number2: int = Form(0), 
    number3: int = Form(0)
):
    result = sum_nums(number1, number2, number3)

    return HTMLResponse(content=f"Result: {result}")
