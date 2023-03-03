export const sectionReducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'set_section': {
            return {
                activeSection: action.payload.index,
                activeSubsection: 0
            }
        }
        case 'next_section': {
            return {
                activeSection: state.activeSection + 1,
                activeSubsection: 0
            }
        } case 'prev_section': {
            return {
                activeSection: state.activeSection - 1,
                activeSubsection: action.payload.index
            }
        } case 'next_subsection': {
            return {
                activeSection: state.activeSection,
                activeSubsection: state.activeSubsection + 1
            }
        } case 'prev_subsection': {
            return {
                activeSection: state.activeSection,
                activeSubsection: state.activeSubsection - 1
            }
        } default: {
            throw new Error('Uknown action: ' + action.type)
        }
    }
}