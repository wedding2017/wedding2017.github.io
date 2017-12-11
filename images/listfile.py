import os

file_list = os.listdir("./")
for fi in file_list:
    if fi.lower().endswith(('.jpg', '.png')):
        print fi + "te"

