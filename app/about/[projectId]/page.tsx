'use client';

import NotFound from '@/app/not-found';
import IntroSection from '@/components/IntroSection';
import { TypographyH3, TypographyP, TypographySpan } from '@/components/typography';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Page() {
    const { projectId } = useParams();

    if (projectId !== '1') {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <IntroSection
                title='IMPACT AND ENGAGEMENT UPDATE — SPECIAL ISSUE: MARCH 2025'
                description=' Bridging the Gap in Understanding and Addressing Adverse Childhood Experiences (ACEs) in Nigeria'
            />
            <div className="px-4 py-6 max-w-4xl mx-auto font-serif text-[12pt] text-black leading-relaxed">



                <TypographyH3 className="text-[12pt] font-bold mt-2">
                    Public and Stakeholder Involvement Event
                </TypographyH3>

                <TypographyP className="mt-4">
                    📍 <i>African Centre of Excellence (OAK-Park), Obafemi Awolowo University, Ile-Ife, Nigeria</i><br />
                    📅 <i>Thursday, 27th March 2025</i><br />
                    👥 <i>149 attendees (134 on-site, 15 virtual)</i><br />
                    🔗{' '}
                    <Link href="https://youtu.be/2i3cn4BPSD0" className="text-blue-600 underline">
                        Watch the Event Replay
                    </Link>
                </TypographyP>

                <TypographyP className="mt-4">
                    Building Capacity &amp; Community Responses to Childhood Trauma in Nigeria
                </TypographyP>

                <TypographyP>
                    On March 27, 2025, the MaryCare Foundation, in collaboration with local and international partners, hosted a major Public and Stakeholder Involvement Event on Adverse Childhood Experiences (ACEs) at the African Centre of Excellence (OAK-Park), Obafemi Awolowo University, Ile-Ife.
                </TypographyP>

                <TypographyP>
                    Dr. Lawal Aderonke served as the Project Manager, Event Coordinator, and MC, anchoring the day’s sessions and overseeing all onsite engagement. She also led the interactive workshop component, facilitating reflection sessions that encouraged attendees to co-create next steps for addressing ACEs in their communities.
                </TypographyP>

                <TypographyP>
                    The hybrid event attracted 149 participants (134 on-site, 15 online), including researchers, healthcare professionals, educators, and policymakers.
                </TypographyP>

                <TypographyP className="text-justify">
                    The day opened with a welcome from Mrs. Mary Bifarin, Founder of the MaryCare Foundation, followed by Professor J.A.O. Okeniyi, CMD of OAUTHC, who stressed the importance of collaborative solutions. Goodwill messages from Prof. Ajani and Dr. J.O. Bifarin underlined institutional support.
                </TypographyP>

                <TypographyP>Key highlights included:</TypographyP>

                <ul className="list-disc list-inside">
                    <li>
                        <TypographySpan>
                            
                        A keynote by Dr. Hannah Timpson (Liverpool John Moores University), focusing on culturally relevant responses to ACEs.
                        </TypographySpan>
                    </li>
                    <li>
                        <TypographySpan>
                        Research findings presentation by Prof. Ogunfowokan on barriers to ACE intervention.
                        </TypographySpan>
                    </li>
                    <li>
                        <TypographySpan>
                        A panel discussion with experts from education, sociology, and maternal health featuring Dr. G.B. Ogbeye (Maternal and Child Health Specialist), Dr. A.A. Anyadike (Director, Sunshine Nursery &amp; Primary School), Dr. T.O. Gbenga-Akanmu (Early Childhood Education Expert) and Prof. O.M. Agunbiade (Professor of Sociology and Gerontology)
                        </TypographySpan>
                    </li>
                    <li>
                        <TypographySpan>
                        A hands-on interactive workshop coordinated onsite by Dr. Aderonke Lawal.
                        </TypographySpan>
                    </li>
                </ul>

                <TypographyP>
                    Participants emphasized the need for community awareness, policy advocacy, and locally adapted educational toolkits.
                </TypographyP>

                {/* <TypographyP className="font-bold">Captions for key photos:</TypographyP> */}

                <div className="flex flex-wrap gap-4 mt-4">
                    <Image
                        src="/IMPACT_AND_ENGAGEMENT_UPDATE2_files/image001.jpg"
                        alt="Event Photo 1"
                        width={270}
                        height={180}
                    />
                    <Image
                        src="/IMPACT_AND_ENGAGEMENT_UPDATE2_files/image002.jpg"
                        alt="Event Photo 2"
                        width={298}
                        height={180}
                    />
                    <Image
                        src="/IMPACT_AND_ENGAGEMENT_UPDATE2_files/image003.jpg"
                        alt="Event Photo 1"
                        width={270}
                        height={180}
                    />
                    <Image
                        src="/IMPACT_AND_ENGAGEMENT_UPDATE2_files/image004.jpg"
                        alt="Event Photo 2"
                        width={298}
                        height={180}
                    />
                </div>
            </div>
        </>
    );
}
