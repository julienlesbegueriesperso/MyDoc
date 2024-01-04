
import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'



const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 2px solid hotpink;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      text-align:right;
      margin: 0;
      padding: 0.5rem;
      color: hsl(275, 42%, 61%);
      border-bottom: 1px solid hotpink;
      /* border-right: 1px solid black; */

      :last-child {
        border-right: 0;
      }
    }
  }`

  export interface TableProps {
    columns:any
    data:any 
  }

  export function Table(props:TableProps) {
    const {columns, data} = props
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}


const columnsWomen = 
   [
    {
      Header: 'Zone à traiter',
      accessor:'zone'
    },
    {
      Header: 'Tarifs',
      accessor:'tarifs'
    },
    {
      Header: 'Prix si ajouté à autres zones',
      accessor:'ajout'
    }
  ]

  const columnsMen = 
   [
    {
      Header: 'Zone à traiter',
      accessor:'zone'
    },
    {
      Header: 'Tarifs',
      accessor:'tarifs'
    }
  ]


export function PricesWomen() {
   
      const data = React.useMemo(() => {
        return [
            {
                zone: 'Lèvres',
                tarifs: '50 €',
                ajout: '30€'
            },
            {
                zone:'Menton',
                tarifs: '50 €',
                ajout: '30€'
            },
            {
              zone:'Aisselles',
              tarifs: '65 €',
              ajout: ''
          },
          {
            zone:'Maillot échancré sans grdes lèvres + SIF',
            tarifs: '110 €',
            ajout: ''
        },
        {
          zone:'Maillot échancré avec grdes lèvres + SIF',
          tarifs: '120 €',
          ajout: ''
      },
      {
        zone:'Avant-bras',
        tarifs: '110 €',
        ajout: ''
    },
    {
      zone:'Bras entiers',
      tarifs: '160 €',
      ajout: ''
  },
  {
    zone:'Demi-jambes (genoux et pieds inclus)',
    tarifs: '190 €',
    ajout: ''
},
{
  zone:'Cuisses',
  tarifs: '230 €',
  ajout: ''
},
{
  zone:'Jambes entières',
  tarifs: '340 €',
  ajout: ''
},
{
  zone:'Lèvres + Menton',
  tarifs: '60 €',
  ajout: ''
},
{
  zone:'Aisselles + Maillot échancré sans grdes lèvres',
  tarifs: '150 €',
  ajout: ''
},
{
  zone:'Aisselles + Maillot échancré avec grdes lèvres',
  tarifs: '160 €',
  ajout: ''
},
{
  zone:'Aisselles + Demi Jambes',
  tarifs: '240 €',
  ajout: ''
},
{
  zone:'Maillot échancré sans grdes lèvres + Demi Jambes',
  tarifs: '270 €',
  ajout: ''
},
{
  zone:'Aisselles + Jambes entières',
  tarifs: '365 €',
  ajout: ''
},
{
  zone:'Maillot échancré sans grdes lèvres + Jambes entières',
  tarifs: '420 €',
  ajout: ''
},
{
  zone:'Aisselles + Maillot échancré sans grdes lèvres+ Demi Jambes',
  tarifs: '295 €',
  ajout: ''
},
{
  zone:'Aisselles + Maillot échancré sans grdes lèvres + Jambes',
  tarifs: '450 €',
  ajout: ''
},
        ]

        
      }, [])
    
      return (
        <Styles>
          <Table columns={columnsWomen} data={data} />
        </Styles>
      )
}

export function PricesMen() {
  const data = React.useMemo(() => {
    return [
       
        {
           zone: 'dos (haut hors épaules)',
           tarifs: '140€',
        },
        {
          zone: 'dos (bas)',
          tarifs: '140€',
        },
        {
          zone: 'torse',
          tarifs: '140€',
        },
        {
          zone: 'abdomen',
          tarifs: '140€',
        },
        {
          zone: 'Fesses (SIF inclus)',
          tarifs: '150€',
        },
        {
          zone: 'Sillon inter fessier (SIF)',
          tarifs: '90€',
        },
        {
          zone: 'dos entier (deltoïde + nuque inclus)',
          tarifs: '300€',
        },
        {
          zone: 'cou + nuque',
          tarifs: '120€',
        },
        {
          zone: 'haut du dos + deltoïde',
          tarifs: '200€',
        },
        {
          zone: 'torse + deltoïde',
          tarifs: '195€',
        },
        {
          zone: 'torse + abdomen',
          tarifs: '240€',
        },
        {
          zone: 'torse + abdomen + cou',
          tarifs: '250€',
        },
        {
          zone: 'torse + abdomen + deltoïde',
          tarifs: '280€',
        },
        {
          zone: 'torse + abdomen + dos entier',
          tarifs: '450€',
        },
        {
          zone: 'torse + abdomen + dos entier + haut des bras',
          tarifs: '500€',
        },
        /**
         * 


Pommettes/Joues 90€
Oreilles 50€ 35 €
Cou 80€
Nuque 80€
Épaules (Deltoïde) 95€
Aisselles 90€
Torse 140€
Abdomen 140€
Dos (Haut hors épaules) 140€
Dos (Bas) 140€
Bras 150€
Avant-bras 140€
Mains 50€
Maillot (Aine+Haut pubis) 150€
Maillot intégral (SIF inclus) 200€
Parties génitales 150€
Fesses (SIF inclus) 150€
Cuisses 330€
Demi-jambes 290€
Pieds 50€
Bras entiers 240€
Dos entiers (Deltoïde inclus)
(Deltoïde+nuque inclus)

300€
Jambes entières 500€
Cou + Nuque 120€
Bras entiers + épaules 290€
Bras entiers + Aisselles + Épaules +
Mains

360€
Haut du dos + Deltoïdes 200€
Torse + Épaules 195€
Torse + Abdomen 240€
Torse + Abdomen + Cou 250€
Torse + Abdomen + Épaules 280€
Torse + Abdomen + Aisselles 310€
Torse + Abdomen + Dos entier 450€
Torse + Abdomen + Dos entier +
Haut des bras

500€
         * 
         */
    ]
  },[])

    return (
      <Styles>
        <Table columns={columnsMen} data={data} />
      </Styles>
    )
}

export default PricesWomen