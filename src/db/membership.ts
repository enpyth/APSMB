import { createServerSupabaseClient } from '@/lib/supabase-server'

export interface Membership {
  id: number
  full_name: string
  email: string
  membership_type: 'visitor' | 'institutional' | 'corporate' | 'student'
  is_verified: boolean
  registered_at: string
  updated_at: string
  details: {
    country: string
    affiliation: string
    field: string
    notes: string
  }
}

export interface CreateMembershipData {
  fullName: string
  email: string
  membershipType: 'visitor' | 'institutional' | 'corporate' | 'student'
  details: {
    country: string
    affiliation: string
    field: string
    notes: string
  }
}

export async function getMemberships(): Promise<Membership[]> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('apmbc_membership')
    .select('*')
    .order('is_verified', { ascending: true })
    .order('registered_at', { ascending: false })

  if (error) {
    console.error('Error fetching memberships:', error)
    throw new Error('Failed to fetch memberships')
  }

  return data || []
}

export async function getMembershipById(id: number): Promise<Membership | null> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('apmbc_membership')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      return null // Not found
    }
    console.error('Error fetching membership:', error)
    throw new Error('Failed to fetch membership')
  }

  return data
}

export async function getMembershipByEmail(email: string): Promise<Membership | null> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('apmbc_membership')
    .select('*')
    .eq('email', email)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      return null // Not found
    }
    console.error('Error fetching membership by email:', error)
    throw new Error('Failed to fetch membership')
  }

  return data
}

export async function createMembership(membershipData: CreateMembershipData): Promise<Membership | null> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('apmbc_membership')
    .insert({
      full_name: membershipData.fullName,
      email: membershipData.email,
      membership_type: membershipData.membershipType,
      is_verified: false,
      details: membershipData.details
    })
    .select()
    .single()

  if (error) {
    console.error('Error creating membership:', error)
    throw new Error('Failed to create membership')
  }

  return data
}

export async function updateMembershipVerification(id: number, is_verified: boolean): Promise<Membership | null> {
  const supabase = await createServerSupabaseClient()
  
  const { data, error } = await supabase
    .from('apmbc_membership')
    .update({ 
      is_verified,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error("Error updating membership verification:", error);
    throw new Error('Failed to update membership verification')
  }

  return data
}

export async function deleteMembership(id: number): Promise<boolean> {
  const supabase = await createServerSupabaseClient()
  
  const { error } = await supabase
    .from('apmbc_membership')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting membership:', error)
    throw new Error('Failed to delete membership')
  }

  return true
}
