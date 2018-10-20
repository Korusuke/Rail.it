import requests, bs4
res = requests.get('https://mumbai7.com/mumbai-local-train-western-timetable/')
res.raise_for_status()
res=bs4.BeautifulSoup(res.text)
table=res.select('tr td')
c=0
times=[]
x1=[0]*4
trains={}
for i in table :
     t=str(i).find('</td>')
     x=str(i)
     if (x[t-7:t-1])[2]==':' :
         times.append(x[t-7:t])
         c=c+1
     elif (x[t-14:t-1])[2]==':' :
         times.append(x[t-14:t-7])
         c=c+1

         
x1[0]=times.index('19:54 S')
x1[1]=times.index('21:28 S')
x1[2]=times.index('21:27 F')
x1[3]=times.index('00:05 S')
#print(times[0:int(x1[0])+1])
trains = {'Bandra to Virar':(times[0:int(x1[0])+1]) ,
          'Andheri to Virar' :(times[int(x1[0]):int(x1[1])+1]),
          'Dadar to Virar' :(times[int(x1[1]):int(x1[2])+1]),
          'Virar to Chruchgate' :(times[int(x1[2]):int(x1[3])+1]),}
print(trains)

