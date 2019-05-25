import requests

url = "http://35.158.76.57/course/solver"
r = requests.get(url)
print("Courses taken")
response = r.json()

file_ =open("allCourses.txt", "w")
file_.writelines(str(response))
print("Courses written to allCourses.txt")


