from flask import Flask, render_template, request

app = Flask(__name__) 

def sum_nums(a: int, b: int, c: int) -> int:
    
    return a + b + c

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calc", methods=["POST"])
def calc():
    a = int(request.form.get("number1", 0))
    b = int(request.form.get("number2", 0))
    c = int(request.form.get("number3", 0))
    
    result = sum_nums(a, b, c)
    
    return f"Result: {result}"

if __name__ == '__main__':
    app.run(debug=True)
