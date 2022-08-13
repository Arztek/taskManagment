INSERT INTO usages (
id,
name)
Values
(uuid_in(md5(random()::text || random()::text)::cstring), 'Working'),
(uuid_in(md5(random()::text || random()::text)::cstring), 'Personal'),
(uuid_in(md5(random()::text || random()::text)::cstring), 'Studing');