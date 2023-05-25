import csv

list_of_animal_names = []

with open('C:\Lexs-Projects\guess-the-animal\src\Animal-Names-Formatted.csv','r', encoding="utf-8") as file:
    csv_reader = csv.reader(file)
    for row in csv_reader: 
        if not ((row == []) or ("Animals" in row[0])):
            list_of_animal_names.append(row)
    file.close()


