use("BD3-NOsql-AtlasMongoDB")

// db["bd3-nosql-atv2"].updateOne(
//   { cod_aluno: 2 }, // critério de busca
//   {
//     $set: {
//       cod_turma: 14,
//       nome: 'ZERO',
//       cpf: '552.330.713-06',
//       rg: '32.974.137-41',
//       telefone_aluno: '(99) 90202-0101',
//       telefone_responsavel: '(99) 90303-0404',
//       email: 'ZERO@email.com',
//       data_nasc: '1007-07-07'
//     }
//   }
// );

// db["bd3-nosql-atv2"].insertOne(
//   { 'cod_aluno': 2, 'cod_turma': 2, 'nome': 'Aluno 2', 'cpf': '123.456.789-02', 'rg': '12.345.678-12', 'telefone_aluno': '(11) 91234-0002', 'telefone_responsavel': '(11) 93456-1002', 'email': 'aluno2@email.com', 'data_nasc': '2005-03-02' }
// );

// db["bd3-nosql-atv2"].deleteOne({ cod_aluno: 2 })

// db["bd3-nosql-atv2"].findOne({ cod_aluno: 2 })

// db["bd3-nosql-atv2"].find({ email: /@gmail\.com$/ })

// db["bd3-nosql-atv2"].insertMany([
//   { 'cod_aluno': 1, 'cod_turma': 4, 'nome': 'Aluno 1', 'cpf': '123.456.789-01', 'rg': '12.345.678-11', 'telefone_aluno': '(11) 91234-0001', 'telefone_responsavel': '(11) 93456-1001', 'email': 'aluno1@email.com', 'data_nasc': '2005-01-31' },
//   { 'cod_aluno': 2, 'cod_turma': 2, 'nome': 'Aluno 2', 'cpf': '123.456.789-02', 'rg': '12.345.678-12', 'telefone_aluno': '(11) 91234-0002', 'telefone_responsavel': '(11) 93456-1002', 'email': 'aluno2@email.com', 'data_nasc': '2005-03-02' },
//   { 'cod_aluno': 3, 'cod_turma': 2, 'nome': 'Aluno 3', 'cpf': '123.456.789-03', 'rg': '12.345.678-13', 'telefone_aluno': '(11) 91234-0003', 'telefone_responsavel': '(11) 93456-1003', 'email': 'aluno3@email.com', 'data_nasc': '2005-04-01' },
//   { 'cod_aluno': 4, 'cod_turma': 4, 'nome': 'Aluno 4', 'cpf': '123.456.789-04', 'rg': '12.345.678-14', 'telefone_aluno': '(11) 91234-0004', 'telefone_responsavel': '(11) 93456-1004', 'email': 'aluno4@email.com', 'data_nasc': '2005-05-01' },
//   { 'cod_aluno': 5, 'cod_turma': 3, 'nome': 'Aluno 5', 'cpf': '123.456.789-05', 'rg': '12.345.678-15', 'telefone_aluno': '(11) 91234-0005', 'telefone_responsavel': '(11) 93456-1005', 'email': 'aluno5@email.com', 'data_nasc': '2005-05-31' },
//   { 'cod_aluno': 6, 'cod_turma': 1, 'nome': 'Aluno 6', 'cpf': '123.456.789-06', 'rg': '12.345.678-16', 'telefone_aluno': '(11) 91234-0006', 'telefone_responsavel': '(11) 93456-1006', 'email': 'aluno6@email.com', 'data_nasc': '2005-06-30' },
//   { 'cod_aluno': 7, 'cod_turma': 5, 'nome': 'Aluno 7', 'cpf': '123.456.789-07', 'rg': '12.345.678-17', 'telefone_aluno': '(11) 91234-0007', 'telefone_responsavel': '(11) 93456-1007', 'email': 'aluno7@email.com', 'data_nasc': '2005-07-30' },
//   { 'cod_aluno': 8, 'cod_turma': 4, 'nome': 'Aluno 8', 'cpf': '123.456.789-08', 'rg': '12.345.678-18', 'telefone_aluno': '(11) 91234-0008', 'telefone_responsavel': '(11) 93456-1008', 'email': 'aluno8@email.com', 'data_nasc': '2005-08-29' },
//   { 'cod_aluno': 9, 'cod_turma': 4, 'nome': 'Aluno 9', 'cpf': '123.456.789-09', 'rg': '12.345.678-19', 'telefone_aluno': '(11) 91234-0009', 'telefone_responsavel': '(11) 93456-1009', 'email': 'aluno9@email.com', 'data_nasc': '2005-09-28' },
//   { 'cod_aluno': 10, 'cod_turma': 3, 'nome': 'Aluno 10', 'cpf': '123.456.789-10', 'rg': '12.345.678-20', 'telefone_aluno': '(11) 91234-0010', 'telefone_responsavel': '(11) 93456-1010', 'email': 'aluno10@email.com', 'data_nasc': '2005-10-28' },
//   { 'cod_aluno': 11, 'cod_turma': 4, 'nome': 'Aluno 11', 'cpf': '123.456.789-11', 'rg': '12.345.678-21', 'telefone_aluno': '(11) 91234-0011', 'telefone_responsavel': '(11) 93456-1011', 'email': 'aluno11@email.com', 'data_nasc': '2005-11-27' },
//   { 'cod_aluno': 12, 'cod_turma': 3, 'nome': 'Aluno 12', 'cpf': '123.456.789-12', 'rg': '12.345.678-22', 'telefone_aluno': '(11) 91234-0012', 'telefone_responsavel': '(11) 93456-1012', 'email': 'aluno12@email.com', 'data_nasc': '2005-12-27' },
//   { 'cod_aluno': 13, 'cod_turma': 4, 'nome': 'Aluno 13', 'cpf': '123.456.789-13', 'rg': '12.345.678-23', 'telefone_aluno': '(11) 91234-0013', 'telefone_responsavel': '(11) 93456-1013', 'email': 'aluno13@email.com', 'data_nasc': '2006-01-26' },
//   { 'cod_aluno': 14, 'cod_turma': 5, 'nome': 'Aluno 14', 'cpf': '123.456.789-14', 'rg': '12.345.678-24', 'telefone_aluno': '(11) 91234-0014', 'telefone_responsavel': '(11) 93456-1014', 'email': 'aluno14@email.com', 'data_nasc': '2006-02-25' },
//   { 'cod_aluno': 15, 'cod_turma': 2, 'nome': 'Aluno 15', 'cpf': '123.456.789-15', 'rg': '12.345.678-25', 'telefone_aluno': '(11) 91234-0015', 'telefone_responsavel': '(11) 93456-1015', 'email': 'aluno15@email.com', 'data_nasc': '2006-03-27' },
//   { 'cod_aluno': 16, 'cod_turma': 5, 'nome': 'Aluno 16', 'cpf': '123.456.789-16', 'rg': '12.345.678-26', 'telefone_aluno': '(11) 91234-0016', 'telefone_responsavel': '(11) 93456-1016', 'email': 'aluno16@email.com', 'data_nasc': '2006-04-26' },
//   { 'cod_aluno': 17, 'cod_turma': 2, 'nome': 'Aluno 17', 'cpf': '123.456.789-17', 'rg': '12.345.678-27', 'telefone_aluno': '(11) 91234-0017', 'telefone_responsavel': '(11) 93456-1017', 'email': 'aluno17@email.com', 'data_nasc': '2006-05-26' },
//   { 'cod_aluno': 18, 'cod_turma': 4, 'nome': 'Aluno 18', 'cpf': '123.456.789-18', 'rg': '12.345.678-28', 'telefone_aluno': '(11) 91234-0018', 'telefone_responsavel': '(11) 93456-1018', 'email': 'aluno18@email.com', 'data_nasc': '2006-06-25' },
//   { 'cod_aluno': 19, 'cod_turma': 4, 'nome': 'Aluno 19', 'cpf': '123.456.789-19', 'rg': '12.345.678-29', 'telefone_aluno': '(11) 91234-0019', 'telefone_responsavel': '(11) 93456-1019', 'email': 'aluno19@email.com', 'data_nasc': '2006-07-25' },
//   { 'cod_aluno': 20, 'cod_turma': 3, 'nome': 'Aluno 20', 'cpf': '123.456.789-20', 'rg': '12.345.678-30', 'telefone_aluno': '(11) 91234-0020', 'telefone_responsavel': '(11) 93456-1020', 'email': 'aluno20@email.com', 'data_nasc': '2006-08-24' },
//   { 'cod_aluno': 21, 'cod_turma': 4, 'nome': 'Aluno 21', 'cpf': '123.456.789-21', 'rg': '12.345.678-31', 'telefone_aluno': '(11) 91234-0021', 'telefone_responsavel': '(11) 93456-1021', 'email': 'aluno21@email.com', 'data_nasc': '2006-09-23' },
//   { 'cod_aluno': 22, 'cod_turma': 3, 'nome': 'Aluno 22', 'cpf': '123.456.789-22', 'rg': '12.345.678-32', 'telefone_aluno': '(11) 91234-0022', 'telefone_responsavel': '(11) 93456-1022', 'email': 'aluno22@email.com', 'data_nasc': '2006-10-23' },
//   { 'cod_aluno': 23, 'cod_turma': 3, 'nome': 'Aluno 23', 'cpf': '123.456.789-23', 'rg': '12.345.678-33', 'telefone_aluno': '(11) 91234-0023', 'telefone_responsavel': '(11) 93456-1023', 'email': 'aluno23@email.com', 'data_nasc': '2006-11-22' },
//   { 'cod_aluno': 24, 'cod_turma': 3, 'nome': 'Aluno 24', 'cpf': '123.456.789-24', 'rg': '12.345.678-34', 'telefone_aluno': '(11) 91234-0024', 'telefone_responsavel': '(11) 93456-1024', 'email': 'aluno24@email.com', 'data_nasc': '2006-12-22' },
//   { 'cod_aluno': 25, 'cod_turma': 3, 'nome': 'Aluno 25', 'cpf': '123.456.789-25', 'rg': '12.345.678-35', 'telefone_aluno': '(11) 91234-0025', 'telefone_responsavel': '(11) 93456-1025', 'email': 'aluno25@email.com', 'data_nasc': '2007-01-21' },
//   { 'cod_aluno': 26, 'cod_turma': 3, 'nome': 'Aluno 26', 'cpf': '123.456.789-26', 'rg': '12.345.678-36', 'telefone_aluno': '(11) 91234-0026', 'telefone_responsavel': '(11) 93456-1026', 'email': 'aluno26@email.com', 'data_nasc': '2007-02-20' },
//   { 'cod_aluno': 27, 'cod_turma': 2, 'nome': 'Aluno 27', 'cpf': '123.456.789-27', 'rg': '12.345.678-37', 'telefone_aluno': '(11) 91234-0027', 'telefone_responsavel': '(11) 93456-1027', 'email': 'aluno27@email.com', 'data_nasc': '2007-03-22' },
//   { 'cod_aluno': 28, 'cod_turma': 4, 'nome': 'Aluno 28', 'cpf': '123.456.789-28', 'rg': '12.345.678-38', 'telefone_aluno': '(11) 91234-0028', 'telefone_responsavel': '(11) 93456-1028', 'email': 'aluno28@email.com', 'data_nasc': '2007-04-21' },
//   { 'cod_aluno': 29, 'cod_turma': 5, 'nome': 'Aluno 29', 'cpf': '123.456.789-29', 'rg': '12.345.678-39', 'telefone_aluno': '(11) 91234-0029', 'telefone_responsavel': '(11) 93456-1029', 'email': 'aluno29@email.com', 'data_nasc': '2007-05-21' },
//   { 'cod_aluno': 30, 'cod_turma': 5, 'nome': 'Aluno 30', 'cpf': '123.456.789-30', 'rg': '12.345.678-40', 'telefone_aluno': '(11) 91234-0030', 'telefone_responsavel': '(11) 93456-1030', 'email': 'aluno30@email.com', 'data_nasc': '2007-06-20' },
//   { 'cod_aluno': 31, 'cod_turma': 5, 'nome': 'Aluno 31', 'cpf': '123.456.789-31', 'rg': '12.345.678-41', 'telefone_aluno': '(11) 91234-0031', 'telefone_responsavel': '(11) 93456-1031', 'email': 'aluno31@email.com', 'data_nasc': '2007-07-20' },
//   { 'cod_aluno': 32, 'cod_turma': 1, 'nome': 'Aluno 32', 'cpf': '123.456.789-32', 'rg': '12.345.678-42', 'telefone_aluno': '(11) 91234-0032', 'telefone_responsavel': '(11) 93456-1032', 'email': 'aluno32@email.com', 'data_nasc': '2007-08-19' },
//   { 'cod_aluno': 33, 'cod_turma': 2, 'nome': 'Aluno 33', 'cpf': '123.456.789-33', 'rg': '12.345.678-43', 'telefone_aluno': '(11) 91234-0033', 'telefone_responsavel': '(11) 93456-1033', 'email': 'aluno33@email.com', 'data_nasc': '2007-09-18' },
//   { 'cod_aluno': 34, 'cod_turma': 4, 'nome': 'Aluno 34', 'cpf': '123.456.789-34', 'rg': '12.345.678-44', 'telefone_aluno': '(11) 91234-0034', 'telefone_responsavel': '(11) 93456-1034', 'email': 'aluno34@email.com', 'data_nasc': '2007-10-18' },
//   { 'cod_aluno': 35, 'cod_turma': 3, 'nome': 'Aluno 35', 'cpf': '123.456.789-35', 'rg': '12.345.678-45', 'telefone_aluno': '(11) 91234-0035', 'telefone_responsavel': '(11) 93456-1035', 'email': 'aluno35@email.com', 'data_nasc': '2007-11-17' },
//   { 'cod_aluno': 36, 'cod_turma': 4, 'nome': 'Aluno 36', 'cpf': '123.456.789-36', 'rg': '12.345.678-46', 'telefone_aluno': '(11) 91234-0036', 'telefone_responsavel': '(11) 93456-1036', 'email': 'aluno36@email.com', 'data_nasc': '2007-12-17' },
//   { 'cod_aluno': 37, 'cod_turma': 3, 'nome': 'Aluno 37', 'cpf': '123.456.789-37', 'rg': '12.345.678-47', 'telefone_aluno': '(11) 91234-0037', 'telefone_responsavel': '(11) 93456-1037', 'email': 'aluno37@email.com', 'data_nasc': '2008-01-16' },
//   { 'cod_aluno': 38, 'cod_turma': 5, 'nome': 'Aluno 38', 'cpf': '123.456.789-38', 'rg': '12.345.678-48', 'telefone_aluno': '(11) 91234-0038', 'telefone_responsavel': '(11) 93456-1038', 'email': 'aluno38@email.com', 'data_nasc': '2008-02-15' },
//   { 'cod_aluno': 39, 'cod_turma': 2, 'nome': 'Aluno 39', 'cpf': '123.456.789-39', 'rg': '12.345.678-49', 'telefone_aluno': '(11) 91234-0039', 'telefone_responsavel': '(11) 93456-1039', 'email': 'aluno39@email.com', 'data_nasc': '2008-03-16' },
//   { 'cod_aluno': 40, 'cod_turma': 2, 'nome': 'Aluno 40', 'cpf': '123.456.789-40', 'rg': '12.345.678-50', 'telefone_aluno': '(11) 91234-0040', 'telefone_responsavel': '(11) 93456-1040', 'email': 'aluno40@email.com', 'data_nasc': '2008-04-15' },
//   { 'cod_aluno': 41, 'cod_turma': 2, 'nome': 'Aluno 41', 'cpf': '123.456.789-41', 'rg': '12.345.678-51', 'telefone_aluno': '(11) 91234-0041', 'telefone_responsavel': '(11) 93456-1041', 'email': 'aluno41@email.com', 'data_nasc': '2008-05-15' },
//   { 'cod_aluno': 42, 'cod_turma': 3, 'nome': 'Aluno 42', 'cpf': '123.456.789-42', 'rg': '12.345.678-52', 'telefone_aluno': '(11) 91234-0042', 'telefone_responsavel': '(11) 93456-1042', 'email': 'aluno42@email.com', 'data_nasc': '2008-06-14' },
//   { 'cod_aluno': 43, 'cod_turma': 3, 'nome': 'Aluno 43', 'cpf': '123.456.789-43', 'rg': '12.345.678-53', 'telefone_aluno': '(11) 91234-0043', 'telefone_responsavel': '(11) 93456-1043', 'email': 'aluno43@email.com', 'data_nasc': '2008-07-14' },
//   { 'cod_aluno': 44, 'cod_turma': 3, 'nome': 'Aluno 44', 'cpf': '123.456.789-44', 'rg': '12.345.678-54', 'telefone_aluno': '(11) 91234-0044', 'telefone_responsavel': '(11) 93456-1044', 'email': 'aluno44@email.com', 'data_nasc': '2008-08-13' },
//   { 'cod_aluno': 45, 'cod_turma': 3, 'nome': 'Aluno 45', 'cpf': '123.456.789-45', 'rg': '12.345.678-55', 'telefone_aluno': '(11) 91234-0045', 'telefone_responsavel': '(11) 93456-1045', 'email': 'aluno45@email.com', 'data_nasc': '2008-09-12' },
//   { 'cod_aluno': 46, 'cod_turma': 3, 'nome': 'Aluno 46', 'cpf': '123.456.789-46', 'rg': '12.345.678-56', 'telefone_aluno': '(11) 91234-0046', 'telefone_responsavel': '(11) 93456-1046', 'email': 'aluno46@email.com', 'data_nasc': '2008-10-12' },
//   { 'cod_aluno': 47, 'cod_turma': 5, 'nome': 'Aluno 47', 'cpf': '123.456.789-47', 'rg': '12.345.678-57', 'telefone_aluno': '(11) 91234-0047', 'telefone_responsavel': '(11) 93456-1047', 'email': 'aluno47@email.com', 'data_nasc': '2008-11-11' },
//   { 'cod_aluno': 48, 'cod_turma': 3, 'nome': 'Aluno 48', 'cpf': '123.456.789-48', 'rg': '12.345.678-58', 'telefone_aluno': '(11) 91234-0048', 'telefone_responsavel': '(11) 93456-1048', 'email': 'aluno48@email.com', 'data_nasc': '2008-12-11' },
//   { 'cod_aluno': 49, 'cod_turma': 1, 'nome': 'Aluno 49', 'cpf': '123.456.789-49', 'rg': '12.345.678-59', 'telefone_aluno': '(11) 91234-0049', 'telefone_responsavel': '(11) 93456-1049', 'email': 'aluno49@email.com', 'data_nasc': '2009-01-10' },
//   { 'cod_aluno': 50, 'cod_turma': 2, 'nome': 'Aluno 50', 'cpf': '123.456.789-50', 'rg': '12.345.678-60', 'telefone_aluno': '(11) 91234-0050', 'telefone_responsavel': '(11) 93456-1050', 'email': 'aluno50@email.com', 'data_nasc': '2009-02-09' },
// ]);

