
# A very simple Flask Hello World app for you to get started with...

from flask import *

app = Flask(__name__)

@app.route('/')
def hello_world():
    print("hello")
    a=request.cookies.get('time')
    print(a)
    return render_template('index.html')

@app.route('/show')
def show():
    print("show")
    return render_template('sho.html')

@app.route('/send', methods=['POST'])
def send():
    print(request.get_json(force=True))
    s=request.get_json(force=True)
    
    
    file=open("data.txt","a")
    for x in s:
    	print(x)
    	file.write(str(x)+" ")
    file.close()
    # for x in s:
    	
    return json.dumps({'ok':True,})


if __name__ == '__main__':
	app.run(debug=True)