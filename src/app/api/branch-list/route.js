import { NextResponse } from 'next/server'

export async function GET() {
  
  const data = [
    {
      id: 16,
      ProgramBranchid: 16,
      Code: 'BOW',
      Name: 'Bowness Library',
      Sector: 'Northwest'
    },
    {
      id: 1,
      ProgramBranchid: 1,
      Code: 'CENT',
      Name: 'Central Library',
      Sector: 'Centre'
    },
    {
      id: 15,
      ProgramBranchid: 15,
      Code: 'CHILL',
      Name: 'Country Hills Library',
      Sector: 'North'
    },
    {
      id: 14,
      ProgramBranchid: 14,
      Code: 'CROW',
      Name: 'Crowfoot Library',
      Sector: 'Northwest'
    },
    {
      id: 13,
      ProgramBranchid: 13,
      Code: 'FISH',
      Name: 'Fish Creek Library',
      Sector: 'South'
    },
    {
      id: 12,
      ProgramBranchid: 12,
      Code: 'FLAWN',
      Name: 'Forest Lawn Library',
      Sector: 'East'
    },
    {
      id: 17,
      ProgramBranchid: 17,
      Code: 'GIUFFRE',
      Name: 'Giuffre Family Library',
      Sector: 'Centre'
    },
    {
      id: 3,
      ProgramBranchid: 3,
      Code: 'UMBACH',
      Name: 'Judith Umbach Library',
      Sector: 'North'
    },
    {
      id: 10,
      ProgramBranchid: 10,
      Code: 'RILEY',
      Name: 'Louise Riley Library',
      Sector: 'Centre'
    },
    {
      id: 9,
      ProgramBranchid: 9,
      Code: 'MPARK',
      Name: 'Memorial Park Library',
      Sector: 'Centre'
    },
    {
      id: 27,
      ProgramBranchid: 27,
      Code: 'NICHOLLS',
      Name: 'Nicholls Family Library',
      Sector: 'West'
    },
    {
      id: 8,
      ProgramBranchid: 8,
      Code: 'NOSE',
      Name: 'Nose Hill Library',
      Sector: 'Northwest'
    },
    {
      id: 11,
      ProgramBranchid: 11,
      Code: 'QUARRY',
      Name: 'Quarry Park Library',
      Sector: 'Southeast'
    },
    {
      id: 30,
      ProgramBranchid: 30,
      Code: 'ROCKY',
      Name: 'Rocky Ridge Library',
      Sector: 'Northwest'
    },
    {
      id: 20,
      ProgramBranchid: 20,
      Code: 'SADDLE',
      Name: 'Saddletowne Library',
      Sector: 'Northeast'
    },
    {
      id: 29,
      ProgramBranchid: 29,
      Code: 'SAGE',
      Name: 'Sage Hill Library',
      Sector: 'North'
    },
    {
      id: 31,
      ProgramBranchid: 31,
      Code: 'SETON',
      Name: 'Seton Library',
      Sector: 'Southeast'
    },
    {
      id: 6,
      ProgramBranchid: 6,
      Code: 'SHAW',
      Name: 'Shawnessy Library',
      Sector: 'South'
    },
    {
      id: 5,
      ProgramBranchid: 5,
      Code: 'SIG',
      Name: 'Signal Hill Library',
      Sector: 'West'
    },
    {
      id: 4,
      ProgramBranchid: 4,
      Code: 'SOUTH',
      Name: 'Southwood Library',
      Sector: 'South'
    },
    {
      id: 2,
      ProgramBranchid: 2,
      Code: 'VILSQ',
      Name: 'Village Square Library',
      Sector: 'Northeast'
    }
  ]

 
  return NextResponse.json({ data })
}