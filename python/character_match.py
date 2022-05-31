# Don't forget to run your tests!

from operator import truediv


def is_character_match(string1, string2):
	string1 = string1.replace(" ", "").lower()
	string2 = string2.replace(" ", "").lower()
	list = []
	counter = 0
	#print(string1,string2)
 	
	if len(string1) == len(string2):
		for letter in string1 :
			if string1.count(letter) == string2.count(letter) :
				counter += 1
	if counter == len(string1) :
		return True
	else : return False