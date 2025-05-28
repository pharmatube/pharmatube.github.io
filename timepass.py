# Open a file to save the output (optional)
with open("video_links.html", "w") as file:
    for i in range(1, 400):
        line = f'<a href=" # " download=" " target="blank" rel="norefferance"> #VIDEO-{i} </a>\n'
        file.write(line)  # Write to the file
        print(line)  # Print to console (optional)
