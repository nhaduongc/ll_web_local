import { useMutation } from '@tanstack/react-query';

import { postContact } from '../api/requests';

export const useSubmitForm = (handleCloseWorkWithUsForm: VoidFunction) =>
    useMutation(postContact, {
        onSuccess: (data: number | undefined) => {
            handleCloseWorkWithUsForm();
            return data || null;
        },
    });
