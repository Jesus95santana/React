from os import listdir
from os.path import isfile, join
mypath = "/Users/jesussantana/Documents/Github/React/2022/"

onlyfiles = [
    f for f in listdir(mypath)
        if  not isfile(join(mypath, f))
    ]
updateString = ""
outdatedString = ""

for name in onlyfiles:
    updateString += (" (cd " + str(name) + " && npm update);")
    outdatedString += (" (cd " + str(name) + " && npm outdated);")

print("String to check for update")
print(outdatedString)
print("String for update");
print(updateString)