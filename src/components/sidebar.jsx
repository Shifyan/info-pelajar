'use client'

import { Sidebar } from 'flowbite-react'
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser
} from 'react-icons/hi'

export default function SidebarComponent() {
  return (
    <Sidebar
      aria-label='Sidebar with multi-level dropdown example'
      className='fixed top-0 left-0 h-full'
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href='/dashboard' icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Collapse icon={HiUser} label='Data Pelajar'>
            <Sidebar.Item href='/dashboard/lihatdata'>Lihat Data</Sidebar.Item>
            <Sidebar.Item href='/dashboard/ubahdata'>Ubah Data</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href='#' icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href='#' icon={HiArrowSmRight}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
