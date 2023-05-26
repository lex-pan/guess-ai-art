import csv

list_of_animal_names = []

with open('C:\Lexs-Projects\guess-the-animal\src\Animal-Names-Formatted.csv','r', encoding="utf-8") as file:
    csv_reader = csv.reader(file)
    for row in csv_reader: 
        list_of_animal_names.append(row)
    file.close()

with open('C:\Lexs-Projects\guess-the-animal\src\Animal-List.csv','w', encoding="utf-8") as file:
    csv_reader = csv.writer(file)
    csv_reader.writerow(list_of_animal_names)
    file.close()

