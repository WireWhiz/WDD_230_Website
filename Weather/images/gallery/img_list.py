from os import listdir;

images = listdir("weather/images/gallery")

file_extentions = [".jpg", ".jpeg", ".svg", ".png"]

def is_image(filename):
    for extention in file_extentions:
        if extention in filename:
            return True
    return False 

images = list(filter(is_image, images))

for image in images:
    print(image)

file = open("weather/images/gallery/img_list.txt", mode="w")
for image in images:
    file.write(image + "\n")
file.close()