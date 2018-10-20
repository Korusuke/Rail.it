import requests, bs4
res = requests.get('https://mumbai7.com/mumbai-local-train-western-timetable/')
res.raise_for_status()
res=bs4.BeautifulSoup(res.text)
table=res.select('tr td')
c=0
times=[]
x1=[0]*4
l1=[]
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

#print(times)
         
x1[0]=times.index('19:54 S')
x1[1]=times.index('21:28 S')
x1[2]=times.index('21:27 F')
x1[3]=times.index('00:05 S')
#print(times[0:int(x1[0])+1])
trains = {'Bandra to Virar':(times[0:int(x1[0])+1]) ,
          'Andheri to Virar' :(times[int(x1[0]):int(x1[1])+1]),
          'Dadar to Virar' :(times[int(x1[1]):int(x1[2])+1]),
          'Virar to Churchgate' :(times[int(x1[2]):int(x1[3])+1])}

lx=['Bandra to Virar','Andheri to Virar','Dadar to Virar','Virar to Churchgate']

#print(trains)


para=res.select('div span')

#s='04:15 S 08:49 F 13:03 F 17:19 F 20:53 F 04:59 F 09:05 F 13:23 F 17:37 F 21:07 S 05:51 F 09:26 F 13:43 F 17:57 F 21:25 F 05:25 F 09:35 F 13:52 S 18:07 S 21 32 F 05:34 F 10:01 F 14:20 DF 18:11 F 21:45 F 05:55 F 10:18 F 14:35 F 18:13 L 22:00 F 06:08 F 10:29 F 14:50 F 18:22 F 22:18 F 06:21 F 10:47 F 14:55 F 18:39 F 22:30 F 06:29 F 11:00 F 15:20 F 18:51 F 22:55 F 06:46 F 11:16 F 15:36 S 19:01 F 23:15 F 06:55 F 11:36 F 15:40 F 19:18 F 23:37 F 07:03 F 11:39 S 16:00 F 19:34 F 23:56 S 07:27 F 11:51 F 16:12 F 19:49 F 00:22 S 07:34 F 12:07 F 16:25 F 19:59 F 00:50 S 17:45 F 12:26 F 16:30 F 20:14 F 18:02 F 12:31 S 16:41 F 20:24 F 18:25 F 12:43 F 16:56 F 20:39 F'

s='''04:15 S 08:49 F 13:03 F 17:19 F 20:53 F
04:59 F 09:05 F 13:23 F 17:37 F 21:07 S
05:51 F 09:26 F 13:43 F 17:57 F 21:25 F
05:25 F 09:35 F 13:52 S 18:07 S 21:32 F
05:34 F 10:01 F 14:20 DF 18:11 F 21:45 F
05:55 F 10:18 F 14:35 F 18:13 S 22:00 F
06:08 F 10:29 F 14:50 F 18:22 F 22:18 F
06:21 F 10:47 F 14:55 F 18:39 F 22:30 F
06:29 F 11:00 F 15:20 F 18:51 F 22:55 F
06:46 F 11:16 F 15:36 S 19:01 F 23:15 F
06:55 F 11:36 F 15:40 F 19:18 F 23:37 F
07:03 F 11:39 S 16:00 F 19:34 F 23:56 S
07:27 F 11:51 F 16:12 F 19:49 F 00:22 S
07:34 F 12:07 F 16:25 F 19:59 F 00:50 S
17:45 F 12:26 F 16:30 F 20:14 F
18:02 F 12:31 S 16:41 F 20:24 F
18:25 F 12:43 F 16:56 F 20:39 F@
04:27 S 06:35 S 08:16 S 09:40 S 10:57 S
04:40 S 06:45 S 08:25 S 09:41 F 11:03 S
04:52 S 06:49 S 08:29 F 09:43 S 11:10 S
05:05 S 06:49 F 08.38 S 09:44 F 11:12 F
05:20 S 06:58 S 08:44 S 09:49 F 11:17 s
05:27 S 07:06 S 08:46 F 09:51 F 11:19 F
05:32 S 07:11 S 08:47 S 09:55 S 11:24 S
05:35 S 07:17 S 08:53 S 10:01 S 11:32 S
05:46 S 07:23 S 08:57 F 10:07 S 11:42 S
05:56 S 07:30 S 08:59 S 10:10 S 11:49 S
06:04 S 07:35 S 09:04 S 10:17 S 11:55 S
06:10 S 07:41 S 09:15 S 10:27 S 11:58 S
06:12 F 07:45 S 09:21 S 10:32 F 12:05 S
06:16 S 07:56 S 09:23 F 10:36 S 12:12 S
06:29 S 07:58 F 09:25 S 10:42 F 12:13 F
06:32 S 08:05 S 09:29 F 10:42 S 12:16 S
06:32 F 08:09 F 09:34 S 10:51 S 12:19 S
12:24 S 13:45 S 15:17 S 16:57 S 18:16 S
12:28 S 13:49 S 15:17 F 17:04 F 18:26 F
12:34 S 13:57 S 15:21 S 17:09 S 18:26 S
12:38 S 14:06 S 15:26 S 17:15 F 18:31 F
12:44 S 14:12 F 15:33 S 17:21 S 18:33 S
12:51 S 14:14 S 15:39 S 17:24 F 18:46 F
12:57 S 14:20 S 15:45 S 17:30 F 18:48 S
12:59 F 14:26 S 15:51 S 17:36 S 18:54 F
13:01 S 14:29 S 15:53 F 17:39 S 18:59 S
13:07 S 14:33 S 15:56 S 17:42 F 19:04 F
13:15 S 14:39 S 16:02 S 17:48 S 19:09 S
13:15 F 14:43 S 16:08 S 17:50 F 19:15 F
13:20 S 14:51 S 16:18 S 17:54 F 19:20 S
13:24 S 14:57 S 16:21 S 17:58 S 19:25 F
13:30 S 14:58 F 16:27 S 18:00 F 19:27 S
13:33 S 15:03 S 16:36 S 18:03 s 19:30 F
13:39 S 15:09 S 16:45 S 18:14 F 19:37 S
19:42 F 20:30 F 21:36 S 22:26 F 00:08 S
19:45 S 20:33 S 21:36 F 22:28 S 00:17 S
19:52 F 20:38 S 21:42 S 22:36 S 00:30 S
19:54 S 20:47 F 21:45 S 22:41 S 00:40 S
20:03 F 20:51 S 21:48 S 22:49 S 01:00 S
20:04 S 20:58 S 21:50 F 23:00 S
20:10 F 21:07 F 21:57 S 23:11 S
20:16 S 21:14 F 22:04 S 23:21 S
20:21 F 21:17 S 22:11 S 23:30 S
20:24 S 21:23 S 22:12 F 23:40 S
20:30 S 21:29 S 22:22 S 23:50 S@
05:50 S 09:18 S 12:09 S 17:30 S 19:58 S
07:27 S 09:31 S 12:41 S 17:45 S 20:01 S
07:38 S 09:32 F 13:04 S 17:54 S 20:12 S
07:48 S 09:37 S 14:01 S 18:10 S 20:19 S
07:53 S 09:46 S 14:17 S 18:19 S 20:27 S
08:00 S 09:56 F 14:48 S 18:29 S 20:55 S
08:22 F 10:04 S 15:00 S 18:38 S 21:04 S
08:32 F 10:06 F 15:30 S 18:52 S 21:32 S
08:35 S 10:14 S 16:15 S 19:02 S 22:44 F
08:35 F 10:30 S 16:39 S 19:13 S 22:45 F
08:53 F 10:33 S 16:46 S 19:17 S 00:01 F
08:56 S 10:45 S 16:54 S 19:30 S
09:02 F 11:00 S 17:01 S 19:34 S
09:11 S 11:14 S 17:06 S 19:42 S
09:12 F 11:52 S 17:16 S 19:51 S@
04:04 S 04:42 S 05:09 S 05:20 S 06:15 S
06:41 S 07:17 S 07:47 S 07:53 S 07:59 S
08:06 S 08:12 S 08:24 S 08:40 S 08:43 S
08:48 S 08:57 S 09:08 S 09:16 S 09:22 S
09:29 S 09:39 S 09:46 S 09:49 S 10:00 S
10:08 S 10:16 S 10:21 S 10:29 S 10:32 S
10:40 S 10:44 S 10:56 S 11:06 S 11:26 S
11:37 S 11:54 S 12:13 S 12:46 S 13:02 S
13:33 S 14:00 S 14:56 S 15:08 S 15:24 S
15:44 S 15:53 S 16:20 S 17:05 S 17:31 S
17:37 S 17:44 S 17:56 S 18:12 S 18:37 S
18:48 S 19:01 S 19:16 S 19:22 S 19:34 S
19:50 S 20:06 S 20:09 S 20:25 S 20:39 S
20:42 S 20:53 S 21:04 S 21:14 S@
10:39 S 11:20 S 21:20 S
10:54 S 11:28 S 21:39 S@
08:12 S 09:52 S 17:42 S 20:08 S 21:51 S
08:41 S 10:20 S 17:51 S 20:46 S 22:56 S
09:07 S 15:48 S 18:22 S 21:14 S 00:54 S
09:28 S 16:54 S 18:41 S 21:26 S
06.20 F 12:05 F 14:37 F 18:25 F
09:02 F 13:22 F 15:55 F 19:53 F
11:34 F 14:15 F 16:44 F 20:15 F@
05:57 S 09:35 F 12:14 S 17:06 F 22:27 S
06:44 S 10:03 S 13:35 S 19:16 S 22:47 S
07:20 S 11:13 S 13:50 S 20:27 S 23:06 S
08:16 S 11:23 F 15:36 F 20:45 S 23:50 S
09:26 F 11:49 S 16:00 F 22:08 S@
06:22 F 09:52 F 12:46 F 16:45 F 19:48 F
07:45 F 11:08 F 13:31 F 17:00 F 23:00 F
08:25 F 11:52 F 15:08 F 17:32 F 23:10 F
09:06 S 12:20 S 16:20 F 19:29 F@
08:20 F 09:31 F 17:46 F
09:01 F 09:56 F@
07:02 S 09:06 S 21:16 S 23:01 S
07:47 S 12:09 S 21:45 S 23:58 S
08:41 S 18:04 S 22:03 S@
18:41 F 19:30 F 20:33 F 21:44 S 23:01 S
18:44 S 19:37 S 20:36 S 21:46 F 23:08 S
18:46 F 19:44 S 20:39 S 21:53 S 23:17 S
18:53 S 19:49 S 20:44 S 21:59 S 23:24 S
18:57 F 19:57 S 20:51 S 22:00 S 23:32 S
16:59 S 20:00 S 20:54 F 22:04 S 23:38 S
19:03 S 20:03 S 21:04 S 22:10 S 23:51 S
19:06 S 20:10 S 21:07 S 22:22 S 00:01 S
19:10 F 20:12 F 21:10 S 22:29 S 00:18 S
19:13 F 20:14 S 21:18 S 22:35 S 00:30 S
19:15 S 20:17 F 21:25 S 22:39 S
19:21 S 20:23 F 21:36 S 22:47 S
19:27 S 20:28 S 21:41 F 22:55 S@
06:01 F 06:48 F 13:11 F@
14:55 F 16:26 F@
09:38 F 15:52 F@
07:18 F 08:20 F 08:44 F@
17:11 S 19:34 S 21:46 S@
20:09 S 20:42 F@
22:52 F@
08:08 F 16:52 F 17:28 F 18:38 F
08:35 F 17:04 F 17:42 F@
17:50 F 08:38 F 19:40 F@
07:46 S 15:19 S 18:27 S 22:10 F
09:10 S 17:10 S 21:13 S 23:02 S@
07:35 S 08:57 S 10:11 S 16:26 S 19:22 S
08:04 S 09:18 S 10:33 S 18:19 S
18:29 S 09:46 S 10:55 S 18:59 S@
05:30 S 10:35 S 18:36 S
06:50 S 16:03 S 23:21 S@
05:50 S 09:20 S 11:18 S 20:13 S 22:30 S
06:50 S 09:49 S 13:06 S 22:06 S 23:14 S@
16:15 F@
05:03 F 10:35 S 12:16 F 15:30 F 18:08 F
08:38 F 10:48 S 13:55 F 15:50 F 18:35 F
09:47 F 11:22 F 15:02 F 16:19 F@
07:31 F 08:11 F 08:46 F 09:09 F@
10:09 F 10:50 F 11:28 F 21:40 F
10:22 F 11:08 F 11:42 F@
05:25 S 06:32 S 18:13 S@
18:35 F 20:23 F 21:15 F@
07:14 F@
07:06 S@
04:10 S 05:38 S'''

s=s.replace('\n' , ' ')

s=s.split('@')

for i in range(0,len(s)) :
     l1.append(s[i].split(' '))

for i in range(1,len(l1)) :
     del(l1[i][0])


li = []
for i in range(0,len(l1)):
     li1 = []
     for j in range(0,len(l1[i])-1,2):
          li1.append(l1[i][j]+" "+l1[i][j+1])
     li.append(li1)

#print(len(li))

nam=['Churchgate to Virar','Churchgate to Borivali','Churchgate to Andheri','Andheri to Churchgate',
     'Churchgate to Mumbai Central','Churchgate to Bandra',
     'Virar to Andheri','Bhayandar to Churchgate',
     'Goregaon to Churchgate','Virar to Borivali','Borivali to Churchgate',
     'Vasai to Dadar','Dadar to Vasai','Bhayandar to Dadar',
     'Vasai to Churchgate','Vasai to Borivali','Bhayandar to Andheri',
     'Bhayandar to Borivali','Malad to Churchgate','Borivali to Dadar',
     'Vasai to Andheri','Bandra to Churchgate',
     'Virar to Bandra','Borivali to Virar',
     'Lower Parel to Virar','Churchgate to Bhayandar',
     'Churchgate to Goregaon','Churchgate to Malad','Mumbai Central to Borivali',
     'Dadar to Borivali','Churchgate to Vasai',
     'Mahalaxmi to Andheri','Andheri to Borivali']

#print(len(nam))

for i in range(len(li)):
     trains[nam[i]]=li[i]

#print(len(nam))
#print(len(li))

stations = {'Churchgate': '0', 
'Marine Lines': '1', 
'Charni Road': '2', 
'Grant Road': '3', 
'Mumbai Central': '4', 
'Mahalaxmi': '5', 
'Lower Parel': '6', 
'Elphinstone Road': '7', 
'Dadar': '8', 
'Matunga Road': '9', 
'Mahim': '10', 
'Bandra': '11', 
'Khar Road': '12', 
'Santacruz': '13', 
'Vile Parle': '14', 
'Andheri': '15', 
'Jogeshwari': '16', 
'Goregaon': '17', 
'Malad': '18', 
'Kandivali': '19', 
'Borivali': '20', 
'Dahisar': '21', 
'Mira Road': '22', 
'Bhayandar': '23', 
'Naigaon': '24', 
'Vasai': '25', 
'Nalasopara': '26', 
'Virar': '27'}

for i in range(len(nam)):
     if(int(stations[(nam[i].split(' to '))[-1]])-int(stations[(nam[i].split(' to '))[0]])) > 0 :
         trains[nam[i]].append('up')
     else:
          trains[nam[i]].append('down')
          
trains['Bandra to Virar'].append('up')
trains['Andheri to Virar'].append('up')
trains['Dadar to Virar'].append('up')
trains['Virar to Churchgate'].append('down')

for i in range(len(nam)):
     for j in range(len(trains[nam[i]])-1):
          if(trains[nam[i]][-1]=='up' and trains[nam[i]][j][-1]=='S'):
               plt=1
          if(trains[nam[i]][-1]=='up' and trains[nam[i]][j][-1]=='F' or trains[nam[i]][j][-1]=='DF'):
               plt=2
          if(trains[nam[i]][-1]=='down' and trains[nam[i]][j][-1]=='S'):
               plt=4
          if(trains[nam[i]][-1]=='down' and trains[nam[i]][j][-1]=='F' or trains[nam[i]][j][-1]=='DF'):
               plt=3
               
          trains[nam[i]][j]=trains[nam[i]][j]+" "+str(plt)
     
for i in range(len(lx)):
     for j in range(len(trains[lx[i]])-1):
          if(trains[lx[i]][-1]=='up' and trains[lx[i]][j][-1]=='S'):
               plt=1
          if(trains[lx[i]][-1]=='up' and trains[lx[i]][j][-1]=='F' or trains[lx[i]][j][-1]=='DF'):
               plt=2
          if(trains[lx[i]][-1]=='down' and trains[lx[i]][j][-1]=='S'):
               plt=4
          if(trains[lx[i]][-1]=='down' and trains[lx[i]][j][-1]=='F' or trains[lx[i]][j][-1]=='DF'):
               plt=3

          trains[lx[i]][j]=trains[lx[i]][j]+" "+str(plt)
          
print(trains)
     



