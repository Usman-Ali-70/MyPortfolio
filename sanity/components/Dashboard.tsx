'use client'

import React, { useEffect, useState } from 'react'
import { Grid, Text, Stack, Box, Flex } from '@sanity/ui'
import { useClient } from 'sanity'
import { motion, Variants } from 'framer-motion'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import { FiSettings, FiExternalLink, FiPlus, FiArrowRight, FiActivity, FiCheckCircle } from 'react-icons/fi'
import { BsCodeSlash, BsChatQuote, BsLayoutTextWindowReverse } from 'react-icons/bs'
import { BiLayer } from 'react-icons/bi'

// Animations
const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`

const gradientBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const GlobalDashboardStyle = createGlobalStyle`
  /* Override Sanity's default scrollbar for dashboard container */
  .dashboard-scroll::-webkit-scrollbar {
    width: 8px;
  }
  .dashboard-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .dashboard-scroll::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
  }
  .dashboard-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.2);
  }
`

// Styled Components
const DashboardWrapper = styled.div`
  min-height: 100%;
  padding: 2rem;
  background-color: #0f1115;
  background-image: 
    radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(236, 72, 153, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%);
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

const HeaderBanner = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 60%);
    opacity: 0.5;
    animation: ${float} 10s ease-in-out infinite;
    z-index: 0;
  }
`

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`

const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(to right, #fff, #a78bfa, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: ${gradientBg} 5s ease infinite;
`

const WelcomeSubtitle = styled.p`
  font-size: 1.1rem;
  color: #9ca3af;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  max-width: 600px;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const PremiumButton = styled.button<{ primary?: boolean }>`
  background: ${props => props.primary ? 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' : 'rgba(255,255,255,0.05)'};
  color: #fff;
  border: 1px solid ${props => props.primary ? 'transparent' : 'rgba(255,255,255,0.1)'};
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.primary ? '0 4px 15px rgba(236, 72, 153, 0.3)' : 'none'};

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)' : 'rgba(255,255,255,0.1)'};
    border-color: ${props => props.primary ? 'transparent' : 'rgba(255,255,255,0.2)'};
    box-shadow: ${props => props.primary ? '0 6px 20px rgba(236, 72, 153, 0.4)' : '0 4px 15px rgba(0,0,0,0.2)'};
  }
`

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border-color: rgba(139, 92, 246, 0.3);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.2);

    &::before {
      left: 100%;
      transition: all 0.7s ease;
    }
  }
`

const IconWrapper = styled.div<{ bg: string; color: string }>`
  background: ${props => props.bg};
  color: ${props => props.color};
  padding: 1rem;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px ${props => props.bg};
`

const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

const StatLabel = styled.span`
  color: #9ca3af;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

const StatValue = styled.span`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`

const SectionCard = styled(motion.div)`
  background: rgba(25, 27, 33, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
`

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #e5e7eb;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const RecentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const RecentItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.03);
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255,255,255,0.05);
    border-color: rgba(255,255,255,0.1);
    transform: translateX(5px);
  }
`

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const ItemIcon = styled.div`
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  padding: 0.6rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemTitle = styled.span`
  color: #e5e7eb;
  font-weight: 500;
  font-size: 0.95rem;
`

const ItemDate = styled.span`
  color: #6b7280;
  font-size: 0.8rem;
`

const HealthItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);

  &:last-child {
    border-bottom: none;
  }
`

const HealthIcon = styled.div<{ $success?: boolean }>`
  color: ${props => props.$success ? '#10b981' : '#f59e0b'};
  background: ${props => props.$success ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)'};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`

const HealthText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const HealthTitle = styled.span`
  color: #d1d5db;
  font-weight: 500;
`

const HealthDesc = styled.span`
  color: #6b7280;
  font-size: 0.85rem;
  line-height: 1.4;
`

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

export function Dashboard() {
    const client = useClient({ apiVersion: '2021-10-21' })
    const [stats, setStats] = useState({ projects: 0, testimonials: 0, services: 0 })
    const [recentProjects, setRecentProjects] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [greeting, setGreeting] = useState('Welcome back')

    useEffect(() => {
        // Dynamic Greeting based on time
        const hour = new Date().getHours()
        if (hour < 12) setGreeting('Good Morning')
        else if (hour < 18) setGreeting('Good Afternoon')
        else setGreeting('Good Evening')

        const fetchData = async () => {
            try {
                const [projCount, testCount, servCount, latest] = await Promise.all([
                    client.fetch('count(*[_type == "project"])'),
                    client.fetch('count(*[_type == "testimonial"])'),
                    client.fetch('count(*[_type == "service"])'),
                    client.fetch('*[_type == "project"] | order(_createdAt desc)[0...4] { _id, title, _createdAt }')
                ])
                setStats({ projects: projCount, testimonials: testCount, services: servCount })
                setRecentProjects(latest)
            } catch (err) {
                console.error('Dashboard fetch error:', err)
            } finally {
                setTimeout(() => setLoading(false), 500) // Smooth intro
            }
        }
        fetchData()
    }, [client])

    if (loading) {
        return (
            <DashboardWrapper>
                <GlobalDashboardStyle />
                <Flex align="center" justify="center" style={{ minHeight: '80vh' }}>
                    <Stack space={4}>
                        <Box style={{ textAlign: 'center' }}>
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            >
                                <FiActivity size={40} color="#8b5cf6" />
                            </motion.div>
                            <Box marginTop={4}>
                                <Text size={2} style={{ color: '#9ca3af', letterSpacing: '2px' }}>INITIALIZING WORKSPACE</Text>
                            </Box>
                        </Box>
                    </Stack>
                </Flex>
            </DashboardWrapper>
        )
    }

    return (
        <DashboardWrapper className="dashboard-scroll">
            <GlobalDashboardStyle />

            <motion.div variants={containerVariants} initial="hidden" animate="visible">

                {/* Banner */}
                <motion.div variants={itemVariants}>
                    <HeaderBanner>
                        <HeaderContent>
                            <WelcomeTitle>{greeting}, Creator <motion.span animate={{ rotate: [0, 20, 0, 20, 0] }} transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }} style={{ display: 'inline-block' }}>👋</motion.span></WelcomeTitle>
                            <WelcomeSubtitle>
                                Your portfolio engine is running smoothly. Manage your projects, track your services, and configure site settings all from this central command center.
                            </WelcomeSubtitle>
                            <ActionGroup>
                                <PremiumButton primary onClick={() => window.location.href = '/studio/structure/project;intent=create'}>
                                    <FiPlus /> New Project
                                </PremiumButton>
                                <PremiumButton onClick={() => window.open('/', '_blank')}>
                                    <FiExternalLink /> View Live Site
                                </PremiumButton>
                                <PremiumButton onClick={() => window.location.href = '/studio/structure/siteSettings'}>
                                    <FiSettings /> Site Settings
                                </PremiumButton>
                            </ActionGroup>
                        </HeaderContent>
                    </HeaderBanner>
                </motion.div>

                {/* Status Cards */}
                <Grid columns={[1, 2, 3]} gap={4} style={{ marginBottom: '2rem' }}>
                    <motion.div variants={itemVariants}>
                        <StatCard>
                            <IconWrapper bg="rgba(139, 92, 246, 0.15)" color="#a78bfa">
                                <BsCodeSlash />
                            </IconWrapper>
                            <StatInfo>
                                <StatLabel>Total Projects</StatLabel>
                                <StatValue>
                                    {stats.projects}
                                </StatValue>
                            </StatInfo>
                        </StatCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <StatCard>
                            <IconWrapper bg="rgba(236, 72, 153, 0.15)" color="#f472b6">
                                <BsChatQuote />
                            </IconWrapper>
                            <StatInfo>
                                <StatLabel>Testimonials</StatLabel>
                                <StatValue>
                                    {stats.testimonials}
                                </StatValue>
                            </StatInfo>
                        </StatCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <StatCard>
                            <IconWrapper bg="rgba(59, 130, 246, 0.15)" color="#60a5fa">
                                <BiLayer />
                            </IconWrapper>
                            <StatInfo>
                                <StatLabel>Services</StatLabel>
                                <StatValue>
                                    {stats.services}
                                </StatValue>
                            </StatInfo>
                        </StatCard>
                    </motion.div>
                </Grid>

                {/* Dual Grid */}
                <ContentGrid>
                    <motion.div variants={itemVariants} style={{ height: '100%' }}>
                        <SectionCard style={{ height: '100%' }}>
                            <SectionTitle>
                                <BsLayoutTextWindowReverse /> Recent Projects
                            </SectionTitle>

                            <RecentList>
                                {recentProjects.map((project, idx) => (
                                    <RecentItem
                                        key={project._id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (idx * 0.1) }}
                                        onClick={() => window.location.href = `/studio/structure/project;${project._id}`}
                                    >
                                        <ItemDetails>
                                            <ItemIcon>
                                                <BsCodeSlash />
                                            </ItemIcon>
                                            <ItemText>
                                                <ItemTitle>{project.title}</ItemTitle>
                                                <ItemDate>{new Date(project._createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</ItemDate>
                                            </ItemText>
                                        </ItemDetails>
                                        <FiArrowRight color="#9ca3af" />
                                    </RecentItem>
                                ))}

                                {recentProjects.length === 0 && (
                                    <div style={{ textAlign: 'center', padding: '2rem', color: '#6b7280' }}>
                                        No projects found. Time to create some!
                                    </div>
                                )}
                            </RecentList>

                            <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
                                <PremiumButton style={{ width: '100%', justifyContent: 'center' }} onClick={() => window.location.href = '/studio/structure/project'}>
                                    View All Projects
                                </PremiumButton>
                            </div>
                        </SectionCard>
                    </motion.div>

                    <motion.div variants={itemVariants} style={{ height: '100%' }}>
                        <SectionCard style={{ height: '100%' }}>
                            <SectionTitle>
                                <FiActivity /> System Health
                            </SectionTitle>

                            <HealthItem>
                                <HealthIcon $success>
                                    <FiCheckCircle />
                                </HealthIcon>
                                <HealthText>
                                    <HealthTitle>Live Sync</HealthTitle>
                                    <HealthDesc>Content changes are immediately reflected on your frontend using Sanity's global CDN.</HealthDesc>
                                </HealthText>
                            </HealthItem>

                            <HealthItem>
                                <HealthIcon $success>
                                    <FiCheckCircle />
                                </HealthIcon>
                                <HealthText>
                                    <HealthTitle>Assets Optimization</HealthTitle>
                                    <HealthDesc>Images and media uploaded to your projects are automatically optimized and served via edge networks.</HealthDesc>
                                </HealthText>
                            </HealthItem>

                            <HealthItem>
                                <HealthIcon>
                                    <FiSettings />
                                </HealthIcon>
                                <HealthText>
                                    <HealthTitle>Setup Complete</HealthTitle>
                                    <HealthDesc>Your dashboard is fully configured. Keep updating your portfolio and exploring new features.</HealthDesc>
                                </HealthText>
                            </HealthItem>
                        </SectionCard>
                    </motion.div>
                </ContentGrid>

            </motion.div >
        </DashboardWrapper >
    )
}
