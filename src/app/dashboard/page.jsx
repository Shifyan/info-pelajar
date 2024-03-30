'use client'
import { Card } from 'flowbite-react'
import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'

export default function Dashboard() {
  return (
    <>
      <div className='main p-3 w-screen'>
        <div className='wrapper flex justify-center mt-10'>
          <div className='flex justify-center'>
            <Card href='#' className='w-[30rem] duration-200 me-5'>
              <h1 className='text-lg font-bold'>Agenda Program</h1>
            </Card>
            <Card href='#' className='w-[30rem] duration-200'>
              <h1 className='text-lg font-bold'>Persebaran Pelajar</h1>
            </Card>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='w-[61.25rem] border rounded-xl p-14 shadow-lg mt-10'>
            <h1 className='font-bold text-2xl uppercase'>
              Agenda Program Pelajar
            </h1>
            <Timeline horizontal className='mt-5'>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>February 2022</Timeline.Time>
                  <Timeline.Title>
                    Application UI code in Tailwind CSS
                  </Timeline.Title>
                  <Timeline.Body>
                    Get access to over 20+ pages including a dashboard layout,
                    charts, kanban board, calendar, and pre-order E-commerce &
                    Marketing pages.
                  </Timeline.Body>
                  <Button color='gray'>
                    Learn More
                    <HiArrowNarrowRight className='ml-2 h-3 w-3' />
                  </Button>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>March 2022</Timeline.Time>
                  <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                  <Timeline.Body>
                    All of the pages and components are first designed in Figma
                    and we keep a parity between the two versions even as we
                    update the project.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>April 2022</Timeline.Time>
                  <Timeline.Title>
                    E-Commerce UI code in Tailwind CSS
                  </Timeline.Title>
                  <Timeline.Body>
                    Get started with dozens of web components and interactive
                    elements built on top of Tailwind CSS.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </>
  )
}
