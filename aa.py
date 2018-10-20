import requests, bs4
res = requests.get('https://mumbai7.com/mumbai-local-train-western-timetable/')
res.raise_for_status()
res=bs4.BeautifulSoup(res.text)
table=res.select('tr td')
c=0
for i in table :
     t=str(i).find('</td>')
     x=str(i)
     if (x[t-7:t-1])[2]==':' :
         print(x[t-7:t])
         c=c+1
     elif (x[t-14:t-1])[2]==':' :
         print(x[t-14:t-7])
         c=c+1
         
print(c)
