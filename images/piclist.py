import os
import json

folders = ["wedding", "family", "life"]
data = {}
for folder in folders:
   path = "./" + folder + "/"
   file_list = os.listdir(path)
   filelist = []
   for fi in file_list:
       if fi.lower().endswith(('.jpg', '.png')):
	   filelist.append(fi)
   data[folder] = filelist

           #print fi + " + te + " + folder

for key in data.iterkeys():
    print key # This will return me the key
    for items in data[key]:
        print("    %s" % items) # This will return me the subkey

with open('result.json', 'w') as fp:
    fp.write("var data = ")
    json.dump(data, fp)
