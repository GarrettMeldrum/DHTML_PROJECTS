from dbfread import DBF

# Open the DBF file
with DBF("C:\Users\Garrett_Meldrum\Downloads\CO05_Staley_TileIndex\CO05_Staley_TileIndex.dbf") as table:
    # Iterate over records and print them
    for record in table:
        print(record)