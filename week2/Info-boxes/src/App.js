import React from "react"
import Boxes from "./components/Boxes"



const App = () => {
    return (
        <div> 
            <Boxes 
                title="A Day in the Life"
                subtitle="From: 'Sgt. Pepper's Lonely Hearts Club Band' (1967)"
                information="Lennon and McCartney hadn't really written a song together since they started composing separately around the time of the Help! sessions. 'A Day in the Life' was the closest they got during their final stages."
            />
            <Boxes 
            
                title="Strawberry Fields Forever"
                subtitle="From: 1967 single"
                information="The Beatles were in the middle of their most ambitious period when they recorded 'Strawberry Fields Forever' and 'Penny Lane,' a pair of nostalgic songs about growing up in Liverpool"
            />
            <Boxes
                title="Abbey Road"
                subtitle="From: 'Abbey Road' (1969)"
                information="The 16-minute suite that takes up the majority of side two of the last album the Beatles recorded together is made up of eight songs, most of them written and arranged by McCartney."
            />
            <Boxes 
                title="While My Guitar Gently Weeps"
                subtitle="From: 'The Beatles' (1968)"
                information="The Beatles' relationships had deteriorated so much by the time they started working on the White Album that they basically played backing band to each other's solo songs."
            />
            <Boxes 
                title="In My Life"
                subtitle="From: 'Rubber Soul' (1965)"
                information="By late-1965, the Beatles had grown tired of Beatlemania, yeah-yeah-yeah and all that pop stuff."
            />
            <Boxes 
                title="Let It Be"
                subtitle="From: 1970 single"
                information="The Beatles' final album was actually recorded before Abbey Road but sat on the shelf for a year before producer Phil Spector cobbled together a record from the hours of tangled tapes the band left behind."
            />
            <Boxes 
                title="Something"
                subtitle="From: 'Abbey Road' (1969)"
                information="George Harrison's elegant Abbey Road cut ranks right next to 'Yesterday' as one of the Beatles' most popular ballads."
            />
            <Boxes 
                title="Penny Lane"
                subtitle="From: 1967 single"
                information="At the start of the Sgt. Pepper's Lonely Hearts Club Band sessions, Paul McCartney and John Lennon each wrote a song about their childhoods."
            />
            <Boxes 
                title="I Want to Hold Your Hand"
                subtitle="From: 1963 single"
                information="The Beatles would make more sophisticated and musically audacious music over the next several years, but their breakthrough U.S. hit is one of their most joyous and unpretentious tunes. No wonder it kicked off Beatlemania here and around the world."
            />
            <Boxes 
                title="Ticket to Ride"
                subtitle="From: 'Help!' (1965)"
                information="After four albums in which they redefined 1950s American rock 'n' roll as they saw it from across the ocean, the Beatles catapulted into a brand new era with the Help! project."
            />
        </div>
    )
}
export default App